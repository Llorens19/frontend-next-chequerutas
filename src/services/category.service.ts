import ApiService from '@/core/api.service';
import { ICategories } from '@/shared/interfaces/entities/category.interface';


export const CategoryService = {
  getCategories : (): Promise<ICategories> => {
    return ApiService.get<ICategories>('categories');
  }
  };
