import ApiService from '@/services/apiService/api.service';
import { ICategories } from '@/shared/interfaces/entities/category.interface';


export const CategoryQueryService = {
  getCategories : (): Promise<ICategories> => {
    return ApiService.get<ICategories>('categories');
  }
  };
