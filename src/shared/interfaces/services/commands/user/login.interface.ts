import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse extends IUserGeneric {
  accessToken: string;
  refreshToken: string;
}
