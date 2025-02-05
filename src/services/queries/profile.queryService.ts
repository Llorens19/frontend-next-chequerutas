import ApiService from '@/services/apiService/api.service';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const ProfileQueryService = {
  getProfileByUsername: (username: string): Promise<IUserGeneric> => {
    return ApiService.get<IUserGeneric>(`profile/${username}`);
  }
};
