import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Tokens } from './types';
import { RtGuard } from 'src/common/guards';
import { CurrentUser, CurrentUserId, Public } from 'src/common/decorators';
import { ResetPasswordDto, SignInDto, SignUpDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signin(@Body() authPayload: SignInDto): Promise<Tokens> {
    return this.authService.signin(authPayload);
  }

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() authPayload: SignUpDto): Promise<Tokens> {
    return this.authService.signup(authPayload);
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@CurrentUserId() userId: number) {
    return await this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @CurrentUser('refreshToken') refreshToken: string,
    @CurrentUserId() userId: number,
  ) {
    return await this.authService.refresh(userId, refreshToken);
  }

  //TODO: Complete reset password route
  @Public()
  @Post('password-reset')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return resetPasswordDto;
  }
}
