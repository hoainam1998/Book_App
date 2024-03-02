import { EntitySchema } from 'typeorm';
import IBookReader from './book-reader.interface';

const BookReader = new EntitySchema<IBookReader>({
  name: 'book-reader',
  columns: {
    user_id: {
      type: 'varchar',
      length: 20,
      primary: true,
    },
    book_id: {
      type: 'varchar',
      length: 20,
      primary: true,
    }
  },
  relations: {
    user_id: {
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'user_id',
        foreignKeyConstraintName: 'FK_USER',
      },
      type: 'many-to-one',
      target: 'users',
    },
    book_id: {
      type: 'many-to-one',
      target: 'books',
      joinColumn: {
        name: 'book_id',
        referencedColumnName: 'book_id',
        foreignKeyConstraintName: 'FK_BOOK'
      }
    }
  },
});

export default BookReader;
