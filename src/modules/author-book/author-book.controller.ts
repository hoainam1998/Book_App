import { Controller } from '@nestjs/common';
import AuthorBookService from './author-book.service';

@Controller('author-book')
export default class AuthorBookController {
  constructor(private authorBookService: AuthorBookService) {}
}
