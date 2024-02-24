import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import Book from './book.entity';

@Entity()
export default class Category {

  @PrimaryColumn()
  category_id: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  book: Book[]
}