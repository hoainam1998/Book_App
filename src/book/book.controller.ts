import { Controller, Get } from '@nestjs/common';
import IBook from './book.interface';
import BookService from './book.service';

@Controller('book')
export default class BookController {
  constructor(private bookService: BookService) {}

  @Get('all')
  findAll(): Promise<IBook[]> {
    return this.bookService.findBook();
  }
}
