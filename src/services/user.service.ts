import ApiService from '@/core/api.service';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const UserService = {
    getCurrentUser(): Promise<IUserGeneric> {
        return ApiService.get<IUserGeneric>('user/currentUser');
    }
};
