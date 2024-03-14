import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  ConflictException,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import CategoryService from './category.service';
import ICategory from './category.interface';
import CategoryDTO from './category.dto';
import CategoryInterceptor from './category.interceptor';
import MessageCreator from '../../messages/message-creator';

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
  create(@Body() category: CategoryDTO): Promise<any> {
    return this.categoryService
      .create(category)
      .catch((e: QueryFailedError) => {
        throw new ConflictException(
          this.messageCreator.getMessageByErrorNo(e.driverError['errno']),
        );
      });
  }
}
