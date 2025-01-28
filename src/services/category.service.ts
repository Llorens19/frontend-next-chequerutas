import ApiService from '@/core/api.service';
import { ICategories } from '@/interfaces/entities/category.interface';


export const CategoryService = {
  getCategories : async (): Promise<ICategories> => {
    return await ApiService.get<ICategories>('categories');
  }
  };
