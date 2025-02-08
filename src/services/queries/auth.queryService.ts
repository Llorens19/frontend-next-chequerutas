import ApiService from '@/services/apiService/api.service';
import { SERVER_AUTH } from '@/shared/constants/serverServices.constants';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import { ILoginResponse } from '@/shared/interfaces/services/commands/user/login.interface';


export const AuthQueryService = {
  getCurrentUser: async (): Promise<IUserGeneric | null> => {
    if (!localStorage.getItem('accessToken')) {
      return null;
    }
    try {
      return await ApiService.get<IUserGeneric>(`${SERVER_AUTH}current_user`);

    } catch (error) {

      const userWhithNewToken = await AuthQueryService.getNewAccessToken();


      if (userWhithNewToken) {
          return userWhithNewToken;
      }
    }
    return null;
  },


  getNewAccessToken: async (): Promise<ILoginResponse | null> => {
    localStorage.removeItem('accessToken');
    try {
      if (localStorage.getItem('refreshToken')) {
        const resp = await ApiService.get<ILoginResponse>(`${SERVER_AUTH}new_access_token`);
        if (resp) {
          localStorage.setItem('accessToken', resp.accessToken);
          return resp;
        }
      }
    } catch (error) {
      localStorage.removeItem('refreshToken');
      return null;
    }
    return null;
  },

};
