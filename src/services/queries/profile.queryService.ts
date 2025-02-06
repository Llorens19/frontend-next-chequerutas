import ApiService from '@/services/apiService/api.service';
import { SERVER_PROFILE } from '@/shared/constants/serverServices.constants';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const ProfileQueryService = {
  getProfileByUsername: (username: string): Promise<IUserGeneric> => {
    return ApiService.get<IUserGeneric>(`${SERVER_PROFILE}profile/${username}`);
  }
};
