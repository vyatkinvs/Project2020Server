import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import {
  Controller,
  Post,
  Body,
  Request,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiBasicAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authSrv: AuthService) {}

  @ApiBasicAuth()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
