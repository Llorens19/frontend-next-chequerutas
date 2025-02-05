import ApiService from '@/services/apiService/api.service';
import { IComments } from '@/shared/interfaces/entities/comment.interface';


export const CommentQueryService = {
  getCategories : (idRoute:string): Promise<IComments> => {
    return ApiService.get<IComments>(`comments/route/${idRoute}`);
  }
  };
