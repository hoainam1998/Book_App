import { Controller, Get } from '@nestjs/common';
import CategoryService from './category.service';
import ICategory from './category.interface';

@Controller('category')
export default class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('all')
  findAll(): Promise<ICategory[]> {
    return this.categoryService.findAll();
  }
}
