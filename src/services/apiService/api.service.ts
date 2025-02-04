import { ErrorResp } from '@/shared/utils/error.util';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


export const axiosClient: AxiosInstance = axios.create({
  // baseURL: 'http://192.168.1.68:4001/',
  baseURL: 'http://localhost:4001/',
  // baseURL: 'http://192.168.241.47:4001/',

});


axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const ApiService = {

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosClient.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  },


  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosClient.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  },

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosClient.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  },

  async update<T>(url: string, slug: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosClient.put<T>(`${url}/${slug}`, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axiosClient.delete<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  },

  handleError(error: unknown): never {
    if (axios.isAxiosError(error) && error.response) {
      const { code, error: errorMessage } = error.response.data || {};

      const newError = new ErrorResp(
        error.response.status,
        code,
        errorMessage || 'Error inesperado'
      );
      throw newError;
    }

    throw new Error(error instanceof Error ? error.message : 'Error inesperado');
  }
};

export default ApiService;
