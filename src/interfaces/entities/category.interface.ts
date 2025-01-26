import { categories } from '@prisma/client';

export type ICategory = categories;

export interface ICategories{
  categories:ICategory[];
};
