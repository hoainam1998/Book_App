import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthorService from './author.service';
import AuthorController from './author.controller';
import AuthorEntity from './author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  providers: [AuthorService],
  controllers: [AuthorController],
  exports: [TypeOrmModule],
})
export default class AuthorModule {}
