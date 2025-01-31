import ApiService from '@/core/api.service';
import { ILocations } from '@/interfaces/entities/location.interface';
import { IRoutePoints } from '@/interfaces/entities/point.interface';
import { IRoutes } from '@/interfaces/entities/route.interface';
import { IRoutePointsFilters } from '@/interfaces/services/route/getRoutePoints.interface';
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

  getRoutePoints: (filters: IRoutePointsFilters): Promise<IRoutePoints> => {
    return ApiService.get<IRoutePoints>('routes/points', { params: filters });
  },

};
