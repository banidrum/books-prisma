import { Module } from '@nestjs/common';
import { BookControllerController } from './book-controller/book-controller.controller';
import { BookService } from './book/book.service';

@Module({
  controllers: [BookControllerController],
  providers: [BookService]
})
export class BookModule {}
