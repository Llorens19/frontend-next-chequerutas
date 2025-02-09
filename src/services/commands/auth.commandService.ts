import ApiService from '@/services/apiService/api.service';
import { SERVER_AUTH } from '@/shared/constants/serverServices.constants';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import { ILogin, ILoginResponse } from '@/shared/interfaces/services/commands/auth/login.interface';
import { IRegister } from '@/shared/interfaces/services/commands/auth/register.interface';


export const AuthCommandService = {
    login: async (data:ILogin): Promise<ILoginResponse> => {
        const resp = await ApiService.post<ILoginResponse>(`${SERVER_AUTH}login`, data);
        localStorage.setItem('accessToken', resp.accessToken);
        localStorage.setItem('refreshToken', resp.refreshToken);
        return resp;
    },
    register: (data:IRegister): Promise<IUserGeneric> =>{
        return ApiService.post<IUserGeneric>(`${SERVER_AUTH}register`, data);
    }
};
