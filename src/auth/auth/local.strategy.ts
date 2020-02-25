import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authSrv: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authSrv.validateUser(username, password);
    if (!user) {
      Logger.error(`I return - exception`, LocalStrategy.name);
      throw new UnauthorizedException();
    }
    Logger.error(`I return ${JSON.stringify(user)}`, LocalStrategy.name);
    return user;
  }
}
