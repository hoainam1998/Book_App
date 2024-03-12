import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import AuthorBookEntity from '../author-book/author-book.entity';

@Entity('author')
export default class AuthorEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  author_id;

  @Column({ type: 'text' })
  avatar;

  @OneToMany(() => AuthorBookEntity, (authorBook) => authorBook.author)
  @JoinColumn({
    name: 'author_id',
    referencedColumnName: 'author_id',
  })
  author_book;
}
