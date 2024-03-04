import { Column, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import BookReaderEntity from '../book-reader/book-reader.entity';

@Entity('user')
export default class UserEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  user_id

  @Column({ type: 'varchar', length: 200 })
  name

  @Column({ type: 'text', nullable: false})
  avatar

  @OneToMany(() => BookReaderEntity, bookReader => bookReader.user)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'user_id'
  })
  book_reader
}
