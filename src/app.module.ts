import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

// Controller
import AuthorController from './modules/author/author.controller';
import BookReaderController from './modules/book-reader/book-reader.controller';
import CategoryController from './modules/category/category.controller';
import BookController from './modules/book/book.controller';
import AuthorBookController from './modules/author-book/author-book.controller';
// Module
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseModule from './modules/database/database.module';
import AuthorModule from './modules/author/author.module';
import BookReaderModule from './modules/book-reader/book-reader.module';
import UserModule from './modules/user/user.module';
import CategoryModule from './modules/category/category.module';
import BookModule from './modules/book/book.module';
import AuthorBookModule from './modules/author-book/author-book.module';
// Service
import AuthorService from './modules/author/author.service';
import BookReaderService from './modules/book-reader/book-reader.service';
import UserService from './modules/user/user.service';
import CategoryService from './modules/category/category.service';
import BookService from './modules/book/book.service';
import AuthorBookService from './modules/author-book/author-book.service';
// Database entity;
import BookEntity from './modules/book/book.entity';
import CategoryEntity from './modules/category/category.entity';
import UserEntity from './modules/user/user.entity';
import BookReaderEntity from './modules/book-reader/book-reader.entity';
import AuthorEntity from './modules/author/author.entity';
import AuthorBookEntity from './modules/author-book/author-book.entity';
// Middleware
import ResponseMiddleware from './middleware/response/response.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    BookModule,
    CategoryModule,
    UserModule,
    BookReaderModule,
    AuthorModule,
    AuthorBookModule,
    DatabaseModule,
  ],
  controllers: [
    BookController,
    CategoryController,
    BookReaderController,
    AuthorController,
    AuthorBookController,
  ],
  providers: [
    BookService,
    CategoryService,
    UserService,
    BookReaderService,
    AuthorService,
    AuthorBookService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseMiddleware).forRoutes('book');
  }
}
