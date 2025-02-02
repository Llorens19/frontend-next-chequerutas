import { Categories } from '@prisma/client';

export type ICategory = Categories;

export interface ICategories{
  categories:ICategory[];
  count?:number;
};
