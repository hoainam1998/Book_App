import { Controller, Get } from '@nestjs/common';
import UserService from './user.service';
import IUser from './user.interface';

@Controller('user')
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  findAll(): Promise<IUser[]> {
    console.log(this.userService.findAll());
    return this.userService.findAll();
  }
}
