import { Controller } from '@nestjs/common';
import CategoryService from './category.service';

@Controller('category')
export default class CategoryController {
  constructor(private categoryService: CategoryService) {}
}
