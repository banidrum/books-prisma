import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    async getAllBooks() {}

    async getBookById(id: string) {}

    async addBook() {}

    async editBook(id: string) {}

    async deleteBook(id: string) {}
}
