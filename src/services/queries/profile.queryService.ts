import ApiService from '@/services/apiService/api.service';
import { SERVER_PROFILE } from '@/shared/constants/serverServices.constants';
import { IFavorites } from '@/shared/interfaces/entities/favorite.interface';
import { IRoutes } from '@/shared/interfaces/entities/route.interface';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const ProfileQueryService = {
  getProfileByUsername: (username: string): Promise<IUserGeneric> => {
    return ApiService.get<IUserGeneric>(`${SERVER_PROFILE}profile/${username}`);
  },
  getRoutesUserPublic: (username: string): Promise<IRoutes> => {
    return ApiService.get<IRoutes>(`${SERVER_PROFILE}routes/${username}/public`);
  },
  getRoutesUserPrivate: (username: string): Promise<IRoutes> => {
    return ApiService.get<IRoutes>(`${SERVER_PROFILE}routes/${username}/private`);
  },
  getFavorites: (): Promise<IFavorites> => {
    return ApiService.get<IFavorites>(`${SERVER_PROFILE}profile/favorites`);
  }
};
