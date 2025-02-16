import ApiService from '@/services/apiService/api.service';
import { SERVER_ROUTE } from '@/shared/constants/serverServices.constants';
import { IFavorite } from '@/shared/interfaces/entities/favorite.interface';
import { IRoute } from '@/shared/interfaces/entities/route.interface';
import { ICreteRouteInput } from '@/shared/interfaces/services/commands/routes/createRoute.interface';

export const RouteCommandService = {

  favoriteRoute: (idRoute: string): Promise<IFavorite> => {
    return ApiService.post<IFavorite>(`${SERVER_ROUTE}routes/favorite/${idRoute}`);
  },

  unfavoriteRoute: (idRoute: string): Promise<IFavorite> => {
    return ApiService.delete<IFavorite>(`${SERVER_ROUTE}routes/unfavorite/${idRoute}`);
  },
  createRoute: (route: ICreteRouteInput): Promise<IRoute> => {
    return ApiService.post<IRoute>(`${SERVER_ROUTE}routes`, route);
  },
  saveRouteImage: async (file: File): Promise<{ url: string }> => {
    return ApiService.uploadFile<{ url: string }>('api/images/upload', file);
  }
};
