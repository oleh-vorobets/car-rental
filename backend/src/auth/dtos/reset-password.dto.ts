import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class ResetPasswordDto {
  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  email: string;
}
