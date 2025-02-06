import ApiService from '@/services/apiService/api.service';
import { SERVER_CATEGORY } from '@/shared/constants/serverServices.constants';
import { ICategories } from '@/shared/interfaces/entities/category.interface';


export const CategoryQueryService = {
  getCategories : (): Promise<ICategories> => {
    return ApiService.get<ICategories>(`${SERVER_CATEGORY}categories`);
  }
  };
