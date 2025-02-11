import ApiService from '@/services/apiService/api.service';
import { PAYMENT_SERVER } from '@/shared/constants/backendServices.constsnts';
import { IPaymentInput } from '@/shared/interfaces/services/commands/payment/payment.interface';


export const PaymentCommandService = {
    payment: async (data:IPaymentInput): Promise<any> => {
      return await ApiService.post<any>(`${PAYMENT_SERVER}payment`, data);
    }
};
