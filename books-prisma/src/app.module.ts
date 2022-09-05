import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { BookControllerController } from './book/book.controller';

@Module({
  imports: [BookModule],
  controllers: [BookControllerController]
})
export class AppModule {}
