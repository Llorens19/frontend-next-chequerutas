import ApiService from '@/core/api.service';
import { IRoutes } from '@/interfaces/entities/route.interface';


export const RouteService = {
    getRoutes(): Promise<IRoutes> {
        return ApiService.get<IRoutes>('routes');
    }
};
