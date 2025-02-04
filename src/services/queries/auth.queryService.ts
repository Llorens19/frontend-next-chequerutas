import ApiService from '@/services/apiService/api.service';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const AuthQueryService = {
    getCurrentUser: (): Promise<IUserGeneric> => {
        return ApiService.get<IUserGeneric>('current_user');
    }
};
