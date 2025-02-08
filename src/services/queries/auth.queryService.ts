import ApiService from '@/services/apiService/api.service';
import { SERVER_AUTH } from '@/shared/constants/serverServices.constants';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';


export const AuthQueryService = {
    getCurrentUser: (): Promise<IUserGeneric | null > => {
        if (localStorage.accessToken) {
          return ApiService.get<IUserGeneric>(`${SERVER_AUTH}current_user`);
        }
        return Promise.resolve(null);
    }
};
