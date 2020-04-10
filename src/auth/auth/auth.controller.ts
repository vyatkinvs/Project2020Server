import { UsersService } from './../../users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import {
  Controller,
  Post,
  Request,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/user.schema';

@Controller('auth')
export class AuthController {
  constructor(
    private authSrv: AuthService,
    private readonly userSrv: UsersService,
  ) {}

  @ApiBasicAuth()
  @UseGuards(AuthGuard('local'))
  @UsePipes(ValidationPipe)
  @Post('login')
  async login(@Request() req): Promise<User | null> {
    // console.log(JSON.stringify(req.user));
    return req.user;
  }

  @UsePipes(ValidationPipe)
  @Post('register')
  async register(@Body() login: LoginDto): Promise<User> {
    Logger.error(`Auth Cont get login - ${JSON.stringify(login)}`);

    if (!login?.confirm || login?.confirm !== login?.password) {
      throw new BadRequestException(`Passwords mismatch`);
    }
    return this.authSrv.registerUser(login);
  }
}
