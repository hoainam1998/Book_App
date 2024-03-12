import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import CategoryEntity from '../category/category.entity';
import BookReaderEntity from '../book-reader/book-reader.entity';
import AuthorBookEntity from '../author-book/author-book.entity';

@Entity('book')
export default class BookEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  book_id;

  @Column({ type: 'text' })
  name;

  @Column({ type: 'text' })
  pdf;

  @Column({ type: 'varchar', length: 20 })
  published_day;

  @Column()
  published_time: number;

  @ManyToOne(() => CategoryEntity, (category) => category.books)
  @JoinColumn({
    name: 'category_id',
    referencedColumnName: 'category_id',
    foreignKeyConstraintName: 'FK_BOOK',
  })
  category;

  @OneToMany(() => BookReaderEntity, (bookReader) => bookReader.book)
  @JoinColumn({
    name: 'book_id',
    referencedColumnName: 'book_id',
  })
  book_reader;

  @OneToMany(() => AuthorBookEntity, (authorBook) => authorBook.book)
  @JoinColumn({
    name: 'book_id',
    referencedColumnName: 'book_id',
  })
  author_book;
}
