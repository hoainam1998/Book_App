import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryEntity from './category.entity';
import CategoryService from './category.service';
import CategoryController from './category.controller';
import CategoryInterceptor from './category.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [
    CategoryService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CategoryInterceptor,
    },
  ],
  controllers: [CategoryController],
  exports: [TypeOrmModule],
})
export default class CategoryModule {}
