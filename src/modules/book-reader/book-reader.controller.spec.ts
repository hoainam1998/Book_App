import { Test, TestingModule } from '@nestjs/testing';
import BookReaderController from './book-reader.controller';

describe('BookReaderController', () => {
  let controller: BookReaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookReaderController],
    }).compile();

    controller = module.get<BookReaderController>(BookReaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
