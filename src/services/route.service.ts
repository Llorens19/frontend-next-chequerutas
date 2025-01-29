import ApiService from '@/core/api.service';
import { ILocations } from '@/interfaces/entities/location.interface';
import { IRoutes } from '@/interfaces/entities/route.interface';
import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';


export const RouteService = {
  getRoutes: (filters: IRouteFilters): Promise<IRoutes> => {
    console.log('filters', filters);
    return ApiService.get<IRoutes>('routes', { params: filters });
  },

  getLocations: (): Promise<ILocations> => {
    return ApiService.get<ILocations>('routes');
  }
};
