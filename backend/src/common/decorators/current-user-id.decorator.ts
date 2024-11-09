import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUserId = createParamDecorator(
  (context: ExecutionContext): number =>
    context.switchToHttp().getRequest().user.sub,
);
