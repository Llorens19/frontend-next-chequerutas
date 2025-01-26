import { ICategory } from '@/interfaces/entities/category.interface';
import {prisma} from '@/libs/prisma';


const getCategories = ():Promise<ICategory[]> => {
  try{
    return prisma.categories.findMany();
  }catch(error : unknown){
    console.error(error);
    return Promise.resolve([] as ICategory[]);
  }
};
export default getCategories;