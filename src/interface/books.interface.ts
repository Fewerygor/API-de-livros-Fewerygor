export interface IBook {
  id: number;
  name: string;
  pages: number;
  category?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export type ICreateData = Pick<IBook, "name" | "pages" | "category">;

export type IUpdateData = Partial<ICreateData>;
