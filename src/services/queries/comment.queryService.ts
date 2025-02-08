import ApiService from '@/services/apiService/api.service';
import { SERVER_COMMENT } from '@/shared/constants/serverServices.constants';
import { IComments } from '@/shared/interfaces/entities/comment.interface';


export const CommentQueryService = {
  getRouteComments: (idRoute: string): Promise<IComments> => {
    return ApiService.get<IComments>(`${SERVER_COMMENT}comments/route/${idRoute}`);
  },
  getUserComments: (username:string): Promise<IComments> => {
    const resp =  ApiService.get<IComments>(`${SERVER_COMMENT}comments/user/${username}`);

    console.log(resp);
    return resp;
  },
};
