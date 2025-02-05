import ApiService from '@/services/apiService/api.service';
import { ILocations } from '@/shared/interfaces/entities/location.interface';
import { IRoutePoints } from '@/shared/interfaces/entities/point.interface';
import { IRoute, IRoutes } from '@/shared/interfaces/entities/route.interface';
import { IRoutePointsFilters } from '@/shared/interfaces/services/route/getRoutePoints.interface';
import { IRouteFilters } from '@/shared/interfaces/services/route/getRoutes.interface';


export const RouteQueryService = {
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

  getRouteById: (id: string): Promise<IRoute> => {
    return ApiService.get<IRoute>(`routes/${id}`);
  },

};
