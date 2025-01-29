import ApiService from '@/core/api.service';
import { IRoutes } from '@/interfaces/entities/route.interface';
import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';


export const RouteService = {
    getRoutes(filters:IRouteFilters): Promise<IRoutes> {
        return ApiService.get<IRoutes>('routes', { params: filters });
    },

    // getLocations(): Promise<string[]> {
    //     const resp = ApiService.get('routes');
    // }
};
