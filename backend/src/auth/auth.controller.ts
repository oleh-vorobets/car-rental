import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessToken } from './types';
import { RtGuard } from 'src/common/guards';
import { CurrentUser, CurrentUserId, Public } from 'src/common/decorators';
import { ResetPasswordDto, SignInDto, SignUpDto } from './dtos';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() authPayload: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AccessToken> {
    const { access_token, refresh_token } =
      await this.authService.signin(authPayload);

    response.setCookie('refreshToken', refresh_token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return { access_token };
  }

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(
    @Body() authPayload: SignUpDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AccessToken> {
    const { access_token, refresh_token } =
      await this.authService.signup(authPayload);

    response.setCookie('refreshToken', refresh_token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return { access_token };
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  async logout(
    @CurrentUserId() userId: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.logout(userId);

    response.setCookie('refreshToken', '', {
      maxAge: 1,
    });

    return userId;
  }

  @Public()
  @UseGuards(RtGuard)
  @Get('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @CurrentUser('refreshToken') refreshToken: string,
    @CurrentUserId() userId: number,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AccessToken> {
    const { access_token, refresh_token } = await this.authService.refresh(
      userId,
      refreshToken,
    );

    response.setCookie('refreshToken', refresh_token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return { access_token };
  }

  //TODO: Complete reset password route
  @Public()
  @Post('password-reset')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return resetPasswordDto;
  }
}
