import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErrors";
import { TBook } from "../interface/books.interface";


export class IsbookAlreadyExist {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    const nameExists: TBook | undefined = booksDatabase.find(
      (book) => book.name === name
    );

    if (nameExists) throw new AppError(409, "Book already registered.");

    return next();
  }
}
