import { AnyZodObject, z } from "zod";
import { bookSchema, createBookBodySchema, editBookBodySchema } from "../schemas/books.schemas";

// export interface IBook {
//   id: number;
//   name: string;
//   pages: number;
//   category?: string | undefined;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export type ICreateData = Pick<IBook, "name" | "pages" | "category">;

// export type IUpdateData = Partial<ICreateData>;


export interface IRequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export type TBook = z.infer<typeof bookSchema>;

export type TCreateBookBody = z.infer<typeof createBookBodySchema>;

export type TEditBookBody = z.infer<typeof editBookBodySchema>;


