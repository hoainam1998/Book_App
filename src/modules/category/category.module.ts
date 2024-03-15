import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryEntity from './category.entity';
import CategoryService from './category.service';
import CategoryController from './category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [TypeOrmModule],
})
export default class CategoryModule {}
