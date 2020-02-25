import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../../users/users.module';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
