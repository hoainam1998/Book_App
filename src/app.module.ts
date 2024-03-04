import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookReaderController from './book-reader/book-reader.controller';
import BookReaderModule from './book-reader/book-reader.module';
import BookReaderService from './book-reader/book-reader.service';
import UserService from './user/user.service';
import UserModule from './user/user.module';
import CategoryModule from './category/category.module';
import CategoryService from './category/category.service';
import CategoryController from './category/category.controller';
import BookModule from './book/book.module';
import BookController from './book/book.controller';
import BookService from './book/book.service';
import ResponseMiddleware from './middleware/response/response.middleware';
import BookEntity from './book/book.entity';
import CategoryEntity from './category/category.entity';
import UserEntity from './user/user.entity';
import BookReaderEntity from './book-reader/book-reader.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
      entities: [BookEntity, CategoryEntity, UserEntity, BookReaderEntity],
      synchronize: true,
    }),
    BookModule,
    CategoryModule,
    UserModule,
    BookReaderModule,
  ],
  controllers: [BookController, CategoryController, BookReaderController],
  providers: [BookService, CategoryService, UserService, BookReaderService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseMiddleware).forRoutes('book');
  }
}
