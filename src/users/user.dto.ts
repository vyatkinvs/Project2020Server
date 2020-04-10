import { IsDefined, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  id: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  password: string;
}
