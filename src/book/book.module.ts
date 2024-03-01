import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookController from './book.controller';
import BookService from './book.service';
import BookSchema from './book.schema';

@Module({
  imports: [TypeOrmModule.forFeature([BookSchema])],
  controllers: [BookController],
  providers: [BookService],
  exports: [TypeOrmModule],
})
export default class BookModule {}
