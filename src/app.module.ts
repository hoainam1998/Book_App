import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import BookModule from './book/book.module';
import BookController from './book/book.controller';
import BookService from './book/book.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
    }),
    BookModule
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
