import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
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

  create(category: ICategory): Promise<InsertResult> {
    return this.categorySchema
      .createQueryBuilder()
      .insert()
      .values(category)
      .execute();
  }

  update(category: ICategory): Promise<UpdateResult> {
    return this.categorySchema
      .createQueryBuilder()
      .update()
      .set({ name: category.name })
      .where('category_id = :id', { id: category.category_id })
      .execute();
  }

  delete(id: string): Promise<DeleteResult> {
    return this.categorySchema
      .createQueryBuilder()
      .delete()
      .where('category_id = :id', { id })
      .execute();
  }
}
