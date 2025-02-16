export interface IRegister {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthdate: string;
  role: string;
  client?: {
    phone: string;
  }
}