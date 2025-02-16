import ApiService from '@/services/apiService/api.service';
import axios from 'axios';


export const PaymentQueryService = {

  //Necesita ser un axios por que el apiservice manda los headers y el cors de la api bloque el acceso
  changeCurrency: async (currency: string): Promise<any> => {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`);
    return response.data;
  }
};
