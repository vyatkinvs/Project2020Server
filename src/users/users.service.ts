import { LoginDto } from './../auth/auth/login.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    const result = this.userModel.find();
    return result;
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async createOne(loginDto: LoginDto): Promise<User> {
    const newUser = new this.userModel(loginDto);
    try {
      return await newUser.save();
    } catch {
      throw new BadRequestException('Db error');
    }
  }

  async updateUser(user: User): Promise<User> {
    return this.userModel.updateOne({ email: user.email }, { ...user });
  }

  async deleteById(id: string): Promise<number> {
    const result = await this.userModel.deleteMany({ _id: id });
    return result.deletedCount;
  }
}
