import { AuthService } from './auth.service';
import { LoginDto } from './login-dto';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authSrv: AuthService) {}

  // hello
  @Post()
  async login(@Body() loginDto: LoginDto) {
    return this.authSrv.login(loginDto);
  }
}
