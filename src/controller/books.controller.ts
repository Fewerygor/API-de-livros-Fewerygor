import { Request, Response } from "express";
import { BooksService } from "../service/books.service";

export class BooksController {
  private booksService = new BooksService();

  createBook = (req: Request, res: Response): Response => {
    const response = this.booksService.createBook(req.body);

    return res.status(201).json(response);
  };

  getBook = (req: Request, res: Response): Response => {
    const response = this.booksService.getBook();

    return res.status(200).json(response);
  };

  getOneBook = (req: Request, res: Response): Response => {
    const response = this.booksService.getOneBook(req.params.id);

    return res.status(200).json(response);
  };

  updateBook = (req: Request, res: Response): Response => {
    const response = this.booksService.updateBook(req.params.id, req.body);

    return res.status(200).json(response);
  };

  deleteBook = (req: Request, res: Response) => {
    const response = this.booksService.deleteBook(req.params.id);

    return res.status(204).json(response);
  };
}
