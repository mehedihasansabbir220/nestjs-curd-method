import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule {}
