import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookController from './book.controller';
import BookService from './book.service';
import BookEntity from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookService],
  exports: [TypeOrmModule],
})
export default class BookModule {}
