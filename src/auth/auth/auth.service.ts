import { LoginDto } from './login-dto';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto): Observable<boolean> {
    return of(true);
  }
}
