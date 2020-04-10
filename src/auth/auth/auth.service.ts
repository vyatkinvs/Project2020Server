import { LoginDto } from './login.dto';
import { UsersService } from './../../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(private userSrv: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userSrv.findOneByEmail(email);
    if (user?.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async registerUser(login: LoginDto): Promise<User> {
    const result = this.userSrv.createOne(login);
    return result;
  }
}
