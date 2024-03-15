import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  UseInterceptors,
  BadRequestException,
  Param,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import CategoryService from './category.service';
import ICategory from './category.interface';
import CategoryDTO from './category.dto';
import CategoryInterceptor from './category.interceptor';
import MessageCreator from '../../messages/message-creator';
import { Actions } from '../../enums';

@Controller('category')
export default class CategoryController {
  private messageCreator: MessageCreator;
  constructor(private categoryService: CategoryService) {
    this.messageCreator = new MessageCreator('Category', 'category_id');
  }

  @Get('all')
  findAll(): Promise<ICategory[]> {
    return this.categoryService.findAll();
  }

  @UseInterceptors(CategoryInterceptor)
  @Post('create')
  create(@Body() category: CategoryDTO): Promise<string> {
    return this.categoryService
      .create(category)
      .then(() => this.messageCreator.getMessageByEvent(Actions.ADD_SUCCESS))
      .catch((e: QueryFailedError) => {
        throw new BadRequestException(
          this.messageCreator.getMessageByErrorNo(e.driverError['errno']),
        );
      });
  }

  @UseInterceptors(CategoryInterceptor)
  @Put('update')
  update(@Body() category: CategoryDTO): Promise<string> {
    return this.categoryService
      .update(category)
      .then(() => this.messageCreator.getMessageByEvent(Actions.UPDATE_SUCCESS))
      .catch((e) => {
        console.log(e);
        throw new BadRequestException(
          this.messageCreator.getMessageByErrorNo(e.driverError['errno']),
        );
      });
  }

  @UseInterceptors(CategoryInterceptor)
  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<string> {
    return this.categoryService
      .delete(id)
      .then(() => this.messageCreator.getMessageByEvent(Actions.DELETE_SUCCESS))
      .catch((e: QueryFailedError) => {
        throw new BadRequestException(
          this.messageCreator.getMessageByErrorNo(e.driverError['errno']),
        );
      });
  }
}
