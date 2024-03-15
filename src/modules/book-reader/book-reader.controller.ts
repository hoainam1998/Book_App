import { Controller, Get } from '@nestjs/common';
import BookReaderService from './book-reader.service';
import IBookReader from './book-reader.interface';

@Controller('book-reader')
export default class BookReaderController {
  constructor(private bookReaderService: BookReaderService) {}

  @Get('all')
  findAll(): Promise<IBookReader[]> {
    return this.bookReaderService.findAll();
  }
}
