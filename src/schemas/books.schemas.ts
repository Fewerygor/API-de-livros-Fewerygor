import { z } from "zod";

export const bookSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const createBookBodySchema = bookSchema
  .pick({ name: true, pages: true, category: true });

export const editBookBodySchema = createBookBodySchema.partial();
