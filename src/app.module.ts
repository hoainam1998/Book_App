import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import BookModule from './book/book.module';
import BookController from './book/book.controller';
import BookService from './book/book.service';
import ResponseMiddleware from './middleware/response/response.middleware';
import Book from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
      entities: [Book],
    }),
    BookModule
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseMiddleware)
      .forRoutes('book');
  }
}
