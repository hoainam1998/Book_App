import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AuthorBookEntity from './author-book.entity';

@Injectable()
export default class AuthorBookService {
  constructor(
    @InjectRepository(AuthorBookEntity)
    private authorBook: Repository<AuthorBookEntity>,
  ) {}
}
