import ApiService from '@/services/apiService/api.service';


export const PaymentQueryService = {
    changeCurrency: async (currency: string): Promise<any> => {
        return await ApiService.get<any>(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`);
    }
};
