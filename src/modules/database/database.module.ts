import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookEntity from '../book/book.entity';
import CategoryEntity from '../category/category.entity';
import UserEntity from '../user/user.entity';
import BookReaderEntity from '../book-reader/book-reader.entity';
import AuthorEntity from '../author/author.entity';
import AuthorBookEntity from '../author-book/author-book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Namdang@2006',
      database: 'books',
      entities: [
        BookEntity,
        CategoryEntity,
        UserEntity,
        BookReaderEntity,
        AuthorEntity,
        AuthorBookEntity,
      ],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export default class DatabaseModule {}
