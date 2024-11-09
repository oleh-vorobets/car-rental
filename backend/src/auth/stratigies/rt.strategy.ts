import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

export type JwtRefreshPayload = {
  sub: number;
  email: string;
  refreshToken: string;
};

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret', // TODO: Change it later to real secret key
      passReqToCallback: true, // pass request in validate function
    });
  }

  validate(req: Request, payload: JwtRefreshPayload) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    return { ...payload, refreshToken }; // It will just decode jwt token and pass next in req.user
  }
}
