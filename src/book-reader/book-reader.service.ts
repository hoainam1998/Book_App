import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import BookReaderSchema from './book-reader.entity';
import IBookReader from './book-reader.interface';

@Injectable()
export default class BookReaderService {
  constructor(@InjectRepository(BookReaderSchema) private bookReadeRepository: Repository<IBookReader>) {}

  findAll(): Promise<IBookReader[]> {
    return this.bookReadeRepository.find();
  }
}
