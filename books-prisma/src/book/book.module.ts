import { Module } from '@nestjs/common';
import { BookControllerController } from './book.controller';
import { BookService } from './book.service';

@Module({
  controllers: [BookControllerController],
  providers: [BookService]
})
export class BookModule {}
