import { TBook } from "../interface/books.interface";

export const booksDatabase: TBook[] = [];

let id: number = 1;

export const generateId = () => {
  return id++;
};
