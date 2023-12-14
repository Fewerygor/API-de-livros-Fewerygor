import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErrors";
import { IBook } from "../interface/books.interface";

export class IsBookValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const bookFound = booksDatabase.findIndex(
      (book) => book.id === Number(req.params.id)
    );
    if (bookFound === -1) {
      throw new AppError(404, "Book not found.");
    }
    return next();
  }
}
