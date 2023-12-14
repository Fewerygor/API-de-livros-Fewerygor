import { IBook } from "../interface/books.interface";

export const booksDatabase: IBook[] = [];

let id: number = 1;

export const generateId = () => {
  return id++;
};
