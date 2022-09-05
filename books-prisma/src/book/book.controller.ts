import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('v1/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks() {
    this.bookService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    this.bookService.getBookById(id);
  }

  @Post()
  addBook(@Body() book: BookDTO) {
    this.bookService.addBook(book);
  }

  @Put('id')
  editBook(@Param('id') id: string, @Body() book: BookDTO) {
    this.bookService.editBook(id, book);
  }

  @Delete('id')
  removeBook(@Param('id') id: string) {
    this.bookService.deleteBook(id);
  }
}
