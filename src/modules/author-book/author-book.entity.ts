import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import BookEntity from '../book/book.entity';
import AuthorEntity from '../author/author.entity';

@Entity('author-book')
export default class AuthorBookEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  book_id;

  @PrimaryColumn({ type: 'varchar', length: 20 })
  author_id;

  @ManyToOne(() => BookEntity, (book) => book.author_book)
  @JoinColumn({
    name: 'book_id',
    referencedColumnName: 'book_id',
    foreignKeyConstraintName: 'FK_AUTHOR_BOOK_TO_BOOK',
  })
  book;

  @ManyToOne(() => AuthorEntity, (author) => author.author_book)
  @JoinColumn({
    name: 'author_id',
    referencedColumnName: 'author_id',
    foreignKeyConstraintName: 'FK_AUTHOR_BOOK_TO_AUTHOR',
  })
  author;
}
