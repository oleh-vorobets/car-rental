import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { Tokens } from './types';
import { SignInDto, SignUpDto } from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async signin({ email, password }: SignInDto): Promise<Tokens> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new ForbiddenException('Access denied');
    }
    if (user.isDeleted) {
      throw new ForbiddenException('Access denied');
    }
    if (!(await compare(password, user.password))) {
      throw new ForbiddenException('Access denied');
    }
    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRt(user.id, tokens.refresh_token);
    return tokens;
  }

  async signup(payload: SignUpDto): Promise<Tokens> {
    const user = await this.userService.findOneByEmail(payload.email);
    if (user) {
      throw new BadRequestException('User is already registered');
    }
    payload.password = await this.hashData(payload.password);
    const createdUser = await this.userService.create(payload);
    const tokens = await this.generateTokens(createdUser.id, createdUser.email);
    await this.updateRt(createdUser.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number) {
    await this.userService.deleteRefreshToken(userId);
  }

  async refresh(userId: number, rt: string) {
    const user = await this.userService.findOneById(userId);
    if (!user || user.isDeleted || !user.token)
      throw new ForbiddenException('Access denied');

    const isRtMathes = await compare(rt, user.token);
    if (!isRtMathes) throw new ForbiddenException('Access denied');

    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRt(user.id, tokens.refresh_token);
    return tokens;
  }

  async generateTokens(userId: number, email: string): Promise<Tokens> {
    const payload = { sub: userId, email };
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '15m',
        secret: 'at-secret',
      }),
      this.jwtService.signAsync(payload, {
        secret: 'rt-secret',
        expiresIn: '1y',
      }),
    ]);
    return { access_token, refresh_token };
  }

  async updateRt(userId: number, token: string) {
    const hashedToken = await hash(token, 10);
    return await this.userService.update(userId, { token: hashedToken });
  }

  async hashData(data: string) {
    return await hash(data, 10);
  }
}
