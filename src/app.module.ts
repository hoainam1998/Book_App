import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

// Controller
import AuthorController from './modules/author/author.controller';
import BookReaderController from './modules/book-reader/book-reader.controller';
import CategoryController from './modules/category/category.controller';
import BookController from './modules/book/book.controller';
import AuthorBookController from './modules/author-book/author-book.controller';
// Module
import { ConfigModule } from '@nestjs/config';
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
// Middleware
import ResponseMiddleware from './middleware/response/response.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
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
