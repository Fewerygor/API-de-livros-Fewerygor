import "express-async-errors";
import express, { json } from "express";
import { booksRoute } from "./route/books.route";
import helmet from "helmet";
import { HandleErrors } from "./errors/handleErrors.middleware";

export const app = express();

app.use(json());

app.use(helmet());

app.use("/books", booksRoute);

app.use(HandleErrors.execute);
