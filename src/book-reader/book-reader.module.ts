import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookReaderController from './book-reader.controller';
import BookReaderService from './book-reader.service';
import BookReaderSchema from './book-reader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookReaderSchema])],
  controllers: [BookReaderController],
  providers: [BookReaderService],
  exports: [TypeOrmModule],
})
export default class BookReaderModule {}
