import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUserId } from 'src/common/decorators';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getMe')
  async getMe(@CurrentUserId() userId: number) {
    return this.userService.findOneById(userId);
  }
}
