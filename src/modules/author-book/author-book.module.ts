import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthorBookEntity from './author-book.entity';
import AuthorBookController from './author-book.controller';
import AuthorBookService from './author-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorBookEntity])],
  controllers: [AuthorBookController],
  providers: [AuthorBookService],
  exports: [TypeOrmModule],
})
export default class AuthorBookModule {}
