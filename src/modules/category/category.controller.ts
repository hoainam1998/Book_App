import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import CategoryService from './category.service';
import ICategory from './category.interface';
import CategoryDTO from './category.dto';
import CategoryInterceptor from './category.interceptor';

@Controller('category')
export default class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @UseInterceptors(CategoryInterceptor)
  @Get('all')
  findAll(): Promise<ICategory[]> {
    return this.categoryService.findAll();
  }

  @Post('create')
  create(@Body() category: CategoryDTO): any {
    return this.categoryService.create(category);
  }
}
