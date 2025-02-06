import { Categories } from '@prisma/client';


export type ICategory = Categories;

// export interface ICategory {
//   idCategory: string;
//   nameCategory: string;
//   descCategory: string;
//   imgCategory: string;
//   slugCategory: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

export interface ICategories{
  categories:ICategory[];
  count?:number;
};
