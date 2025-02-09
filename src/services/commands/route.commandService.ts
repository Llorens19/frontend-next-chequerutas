import ApiService from '@/services/apiService/api.service';
import { SERVER_ROUTE } from '@/shared/constants/serverServices.constants';
import { IFavorite } from '@/shared/interfaces/entities/favorite.interface';

export const RouteCommandService = {

  favoriteRoute: (idRoute: string): Promise<IFavorite> => {
    return ApiService.post<IFavorite>(`${SERVER_ROUTE}routes/favorite/${idRoute}`);
  },

  unfavoriteRoute: (idRoute: string): Promise<IFavorite> => {
    return ApiService.delete<IFavorite>(`${SERVER_ROUTE}routes/unfavorite/${idRoute}`);
  },
};
