import ApiService from '@/services/apiService/api.service';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import { ILogin, ILoginResponse } from '@/shared/interfaces/services/user/login.interface';
import { IRegister } from '@/shared/interfaces/services/user/register.interface';


export const AuthService = {
    getCurrentUser: (): Promise<IUserGeneric> => {
        return ApiService.get<IUserGeneric>('current_user');
    },
    login: async (data:ILogin): Promise<ILoginResponse> => {
        const resp = await ApiService.post<ILoginResponse>('login', data);
        localStorage.setItem('accessToken', resp.accessToken);
        localStorage.setItem('refreshToken', resp.refreshToken);
        console.log('resp', resp);
        return resp;
    },
    register: (data:IRegister): Promise<IUserGeneric> =>{
        return ApiService.post<IUserGeneric>('register', data);
    }
};
