import { UsersService } from './../../users/users.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userSrv: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userSrv.findOne(email);
    if (user?.password === pass) {
      const { password, ...result } = user;
      Logger.error(`I return ${JSON.stringify(result)}`, AuthService.name);
      return result;
    }
    Logger.error(`I return - null`, AuthService.name);
    return null;
  }
}
