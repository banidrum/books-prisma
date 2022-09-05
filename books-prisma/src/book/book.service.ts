import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book, Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async getBookById(id: string): Promise<Book> {
    return this.prisma.book.findFirst({ where: { id } });
  }

  async addBook(data: Prisma.BookCreateInput) {
    return this.prisma.book.create({ data });
  }

  async editBook(id: string, book: BookDTO) {
    return this.prisma.book.update({ where: { id }, data: book });
  }

  async deleteBook(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
