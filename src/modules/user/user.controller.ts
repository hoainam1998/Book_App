import { Controller, Get } from '@nestjs/common';
import UserService from './user.service';
import IUser from './user.interface';

@Controller('user')
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }
}
