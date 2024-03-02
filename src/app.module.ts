import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryModule from './category/category.module';
import CategoryService from './category/category.service';
import CategoryController from './category/category.controller';
import BookModule from './book/book.module';
import BookController from './book/book.controller';
import BookService from './book/book.service';
import ResponseMiddleware from './middleware/response/response.middleware';
import BookSchema from './book/book.schema';
import CategorySchema from './category/category.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
      entities: [BookSchema, CategorySchema],
      synchronize: true,
    }),
    BookModule,
    CategoryModule,
  ],
  controllers: [BookController, CategoryController],
  providers: [BookService, CategoryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseMiddleware).forRoutes('book');
  }
}
