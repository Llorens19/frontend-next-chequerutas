import { ErrorResp } from '@/shared/utils/error.util';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const isBrowser = typeof window !== 'undefined';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

console.log('Backend URL:', process.env.BACKEND_URL);


axiosClient.interceptors.request.use(
  (config) => {
    if (isBrowser) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      if (refreshToken) {
        config.headers.refresh_authorization = `Bearer ${refreshToken}`;
      }
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
