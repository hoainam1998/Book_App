import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import Book from './book.entity';
import IBook from './book.interface';

@Injectable()
export default class BookService {
  // constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}

  findBook(): Promise<IBook[]> {
    // return this.bookRepository.find();
    return Promise.resolve([]);
  }
}
