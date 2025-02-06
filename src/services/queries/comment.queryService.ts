import ApiService from '@/services/apiService/api.service';
import { SERVER_COMMENT } from '@/shared/constants/serverServices.constants';
import { IComments } from '@/shared/interfaces/entities/comment.interface';


export const CommentQueryService = {
  getCategories : (idRoute:string): Promise<IComments> => {
    return ApiService.get<IComments>(`${SERVER_COMMENT}comments/route/${idRoute}`);
  }
  };
