import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import UserSchema from './user.entity';
import IUser from './user.interface';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserSchema) private userRepository: Repository<IUser>,
  ) {}

  findAll(): Promise<IUser[]> {
    return this.userRepository.find();
  }
}
