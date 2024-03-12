import { PrimaryColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import BookEntity from '../book/book.entity';

@Entity('category')
export default class CategoryEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  category_id;

  @Column({ type: 'varchar', length: 20 })
  name;

  @OneToMany(() => BookEntity, (book) => book.category)
  @JoinColumn({
    name: 'book_id',
    referencedColumnName: 'book_id',
  })
  books: BookEntity[];
}
