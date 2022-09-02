import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('')
export class BookControllerController {
    constructor(private bookService: BookService) {}

    @Get()
    getAllBooks() {
        this.bookService.getAllBooks()
    }

    @Get(':id')
    getBookById(@Param('id') id: string) {
        this.bookService.getBookById(id)
    }

    @Post()
    addBook() {
        this.bookService.addBook()
    }

    @Patch('id')
    editBook(@Param('id') id: string) {
        this.bookService.editBook(id)
    }

    @Delete('id')
    removeBook(@Param('id') id: string) {}
}
