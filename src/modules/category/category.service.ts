import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CategorySchema from './category.entity';
import ICategory from './category.interface';

@Injectable()
export default class CategoryService {
  constructor(
    @InjectRepository(CategorySchema)
    private categorySchema: Repository<ICategory>,
  ) {}

  findAll(): Promise<ICategory[]> {
    return this.categorySchema.find();
  }
}
