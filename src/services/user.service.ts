import ApiService from '@/core/api.service';
import { IUserGeneric } from '@/interfaces/entities/user.interface';


export const UserService = {
    getCurrentUser(): Promise<IUserGeneric> {
        return ApiService.get<IUserGeneric>('user/currentUser');
    }
};
