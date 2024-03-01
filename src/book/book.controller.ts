import {
  Controller,
  ForbiddenException,
  Get,
  UseFilters,
} from '@nestjs/common';
import IBook from './book.interface';
import BookService from './book.service';
import HttpExceptionFilter from '../filter/http/http.filter';

@Controller('book')
//  @UseFilters(HttpExceptionFilter)
export default class BookController {
  constructor(private bookService: BookService) {}

  @Get('all')
  findAll(): Promise<IBook[]> {
    // throw new ForbiddenException('You have not permission!');
    return this.bookService.findBook();
  }
}
