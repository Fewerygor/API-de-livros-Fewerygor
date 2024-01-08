import { Router } from "express";
import { BooksController } from "../controller/books.controller";
import { IsBookValid } from "../middlewares.ts/IsBookValid.middleware";
import { IsbookAlreadyExist } from "../middlewares.ts/IsBookAlreadyExist.middleware";
import { ValidateRequest } from "../middlewares.ts/validateRequest.middleware";
import {
  createBookBodySchema,
  editBookBodySchema,
} from "../schemas/books.schemas";

export const booksRoute = Router();

const booksController = new BooksController();

booksRoute.post(
  "/",
  ValidateRequest.execute({ body: createBookBodySchema }),
  IsbookAlreadyExist.execute,
  booksController.postBook
);
booksRoute.get("/", booksController.getBook);
booksRoute.get("/:id", IsBookValid.execute, booksController.getOneBook);
booksRoute.patch(
  "/:id",
  ValidateRequest.execute({ body: editBookBodySchema }),
  IsBookValid.execute,
  IsbookAlreadyExist.execute,
  booksController.updateBook
);
booksRoute.delete("/:id", IsBookValid.execute, booksController.deleteBook);
