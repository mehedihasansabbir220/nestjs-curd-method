import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books, Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  create(createBookDto: Prisma.BooksCreateInput) {
    return this.prisma.books.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.books.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where,
    });
  }
}
