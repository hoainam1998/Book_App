import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import BookSchema from './book.entity';
import IBook from './book.interface';

@Injectable()
export default class BookService {
  constructor(@InjectRepository(BookSchema) private bookRepository: Repository<IBook>) {}

  findBook(): Promise<IBook[]> {
    return this.bookRepository.find();
  }
}
