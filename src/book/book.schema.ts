import { EntitySchema } from 'typeorm';
import IBook from './book.interface';

const BookSchema = new EntitySchema<IBook>({
  name: 'books',
  columns: {
    book_id: {
      type: 'varchar',
      length: 20,
      primary: true,
    },
    name: {
      type: 'text',
    },
    pdf: {
      type: 'text'
    },
    published_day: {
      type: Number
    },
    republish_time: {
      type: Number
    },
    category_id: {
      type: 'varchar',
      length: 20,
      unique: true,
    }
  },
  relations: {
    category_id: {
      joinColumn: {
        name: 'category_id',
        referencedColumnName: 'category_id',
        foreignKeyConstraintName: 'FK_CATEGORY_BOOK',
      },
      type: 'many-to-one',
      target: 'categories'
    },
  },
});

export default BookSchema;
