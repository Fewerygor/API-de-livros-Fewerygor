import { booksDatabase, generateId } from "../database/database";
import { IBook, ICreateData, IUpdateData } from "../interface/books.interface";

export class BooksService {
  createBook(data: ICreateData): IBook {
    const newBook: IBook = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  getBook() {
    return booksDatabase;
  }

  getOneBook(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    return booksDatabase[index];
  }

  updateBook(id: string, data: IUpdateData): IBook | undefined {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    booksDatabase[index] = {
      ...booksDatabase[index],
      ...data,
      updatedAt: new Date()
    };

    return booksDatabase[index];
  }

  deleteBook(id: string) {
    const bookIndex = booksDatabase.findIndex((book) => book.id === Number(id));

    booksDatabase.splice(bookIndex, 1);
  }
}
