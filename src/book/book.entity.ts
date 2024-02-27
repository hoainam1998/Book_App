import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import Category from '../entities/category.entity';

@Entity()
export default class Books {
  @PrimaryColumn({ type: 'int', width: 20 })
  book_id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'text' })
  pdf: string;

  @Column({ type: 'int', width: 20 })
  published_day: number;

  @Column()
  republish_time: number;
}