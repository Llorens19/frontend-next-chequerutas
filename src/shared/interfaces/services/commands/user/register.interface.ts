export interface IRegister {
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  birthdate: string;
  role: string;
  client?: {
    phone: string;
  }
}