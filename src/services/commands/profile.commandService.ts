import ApiService from '@/services/apiService/api.service';
import { SERVER_PROFILE } from '@/shared/constants/serverServices.constants';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';


export const ProfileCommandService = {
  follow: (idFollowed: string): Promise<IFollow> => {
    return ApiService.post<IFollow>(`${SERVER_PROFILE}profile/follow/${idFollowed}`);
  },
  unfollow: (idUnFollowed: string): Promise<IFollow> => {
    return ApiService.post<IFollow>(`${SERVER_PROFILE}profile/unfollow/${idUnFollowed}`);
  },
};
