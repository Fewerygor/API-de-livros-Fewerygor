import express, { json } from "express";
import { booksRoute } from "./route/books.route";
import "express-async-errors";
import { HandleErrors } from "./errors/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books", booksRoute);

app.use(HandleErrors.execute);
