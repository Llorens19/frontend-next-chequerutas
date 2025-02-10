import ApiService from '@/services/apiService/api.service';
import { PAYMENT_SERVER } from '@/shared/constants/backendServices.constsnts';
import { ILogin, ILoginResponse } from '@/shared/interfaces/services/commands/auth/login.interface';


export const PaymentCommandService = {
    payment: async (data:ILogin): Promise<ILoginResponse> => {
      return await ApiService.post<ILoginResponse>(`${PAYMENT_SERVER}payment`, data);
    }
};
