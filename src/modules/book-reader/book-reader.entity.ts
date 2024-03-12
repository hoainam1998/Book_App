import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import BookEntity from '../book/book.entity';
import UserEntity from 'src/modules/user/user.entity';

@Entity('book-reader')
export default class BookReaderEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  user_id;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  book_id;

  @ManyToOne(() => BookEntity, (book) => book.book_reader)
  @JoinColumn({
    name: 'book_id',
    referencedColumnName: 'book_id',
    foreignKeyConstraintName: 'FK_BOOK_READER_BOOK',
  })
  book;

  @ManyToOne(() => UserEntity, (user) => user.book_reader)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id',
    foreignKeyConstraintName: 'FK_BOOK_READER_USER',
  })
  user;
}
