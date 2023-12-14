import { Router } from "express";
import { BooksController } from "../controller/books.controller";
import { IsBookValid } from "../middlewares.ts/IsBookValid.middleware";
import { IsbookAlreadyExist } from "../middlewares.ts/IsBookAlreadyExist.middleware";

export const booksRoute = Router();

const booksController = new BooksController();

booksRoute.post("/", IsbookAlreadyExist.execute, booksController.createBook);
booksRoute.get("/", booksController.getBook);
booksRoute.get("/:id", IsBookValid.execute, booksController.getOneBook);
booksRoute.patch("/:id", IsBookValid.execute, IsbookAlreadyExist.execute, booksController.updateBook);
booksRoute.delete("/:id", IsBookValid.execute, booksController.deleteBook);
