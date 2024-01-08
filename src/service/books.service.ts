import { booksDatabase, generateId } from "../database/database";
import {
  TBook,
  TCreateBookBody,
  TEditBookBody,
} from "../interface/books.interface";

export class BooksService {
  createBook(data: TCreateBookBody): TBook {
    const newBook: TBook = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  getBook(query: string) {
    if (query) {
      return booksDatabase.filter((book) => book.name.toLowerCase().includes(query));
    }
    return booksDatabase;
  }

  getOneBook(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    return booksDatabase[index];
  }

  updateBook(id: string, data: TEditBookBody): TBook | undefined {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    booksDatabase[index] = {
      ...booksDatabase[index],
      ...data,
      updatedAt: new Date(),
    };

    return booksDatabase[index];
  }

  deleteBook(id: string) {
    const bookIndex = booksDatabase.findIndex((book) => book.id === Number(id));

    booksDatabase.splice(bookIndex, 1);
  }
}
