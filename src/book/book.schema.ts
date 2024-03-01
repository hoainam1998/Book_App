import { EntitySchema } from 'typeorm';
import IBook from './book.interface';

const BookSchema = new EntitySchema<IBook>({
  name: 'books',
  columns: {
    book_id: {
      type: Number,
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
  },
});

export default BookSchema;
