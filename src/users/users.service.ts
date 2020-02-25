import { Injectable, Logger } from '@nestjs/common';
import { json } from 'express';

export interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [
      { id: 1, email: 'test@email.com', password: 'test' },
      { id: 2, email: 'test2@email.com', password: 'test' },
    ];
  }
  async findOne(email: string): Promise<any> {
    const user = this.users.find(user => user.email === email);
    Logger.error(`I return ${JSON.stringify(user)}`, UsersService.name);
    return user;
  }
}
