import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { BookControllerController } from './book/book.controller';

@Module({
  imports: [BookModule],
  controllers: [AppController, BookControllerController],
  providers: [AppService],
})
export class AppModule {}
