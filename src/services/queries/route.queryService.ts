import ApiService from '@/services/apiService/api.service';
import { SERVER_ROUTE } from '@/shared/constants/serverServices.constants';
import { ILocations } from '@/shared/interfaces/entities/location.interface';
import { IRoutePoints } from '@/shared/interfaces/entities/point.interface';
import { IRoute, IRoutes } from '@/shared/interfaces/entities/route.interface';
import { IRoutePointsFilters } from '@/shared/interfaces/services/queries/route/getRoutePoints.interface';
import { IRouteFilters } from '@/shared/interfaces/services/queries/route/getRoutes.interface';


export const RouteQueryService = {
  getRoutes: (filters: IRouteFilters): Promise<IRoutes> => {
    return ApiService.get<IRoutes>(`${SERVER_ROUTE}routes`, { params: filters });
  },

  getLocations: (): Promise<ILocations> => {
    const resp =  ApiService.get<ILocations>(`${SERVER_ROUTE}routes/locations`);
    console.log(resp);
    return resp;
  },

  getTitles: (): Promise<string[]> => {
    return ApiService.get<string[]>(`${SERVER_ROUTE}routes/titles`);
  },

  getRoutePoints: (filters: IRoutePointsFilters): Promise<IRoutePoints> => {
    return ApiService.get<IRoutePoints>(`${SERVER_ROUTE}routes/points`, { params: filters });
  },

  getRouteById: (id: string): Promise<IRoute> => {
    return ApiService.get<IRoute>(`${SERVER_ROUTE}routes/${id}`);
  },

};
