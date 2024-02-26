import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Book from './book.entity';

@Injectable()
export default class BookService {
  constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}

  findBook(): Promise<Book[]> {
    return this.bookRepository.find();
  }
}
