import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategorySchema from './category.schema';
import CategoryService from './category.service';
import CategoryController from './category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [TypeOrmModule],
})
export default class CategoryModule {}