import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import BookEntity from '../book/book.entity';
import CategoryEntity from '../category/category.entity';
import UserEntity from '../user/user.entity';
import BookReaderEntity from '../book-reader/book-reader.entity';
import AuthorEntity from '../author/author.entity';
import AuthorBookEntity from '../author-book/author-book.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: configService.get('DATABASE_TYPE') as 'mysql',
        host: configService.get<string>('HOST'),
        port: +configService.get<string>('PORT'),
        username: configService.get<string>('USER_NAME'),
        password: configService.get<string>('PASSWORD'),
        database: configService.get<string>('DATABASE'),
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
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export default class DatabaseModule {}
