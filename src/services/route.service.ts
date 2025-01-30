import ApiService from '@/core/api.service';
import { ILocations } from '@/interfaces/entities/location.interface';
import { IRoutes } from '@/interfaces/entities/route.interface';
import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';


export const RouteService = {
  getRoutes: (filters: IRouteFilters): Promise<IRoutes> => {
    return ApiService.get<IRoutes>('routes', { params: filters });
  },

  getLocations: (): Promise<ILocations> => {
    const resp =  ApiService.get<ILocations>('routes/locations');
    console.log(resp);
    return resp;
  },

  getTitles: (): Promise<string[]> => {
    return ApiService.get<string[]>('routes/titles');
  },

};
