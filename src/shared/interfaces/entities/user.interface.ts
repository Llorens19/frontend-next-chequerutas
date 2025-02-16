import { IAdminFields } from '@/shared/interfaces/entities/admin.interface';
import { IClientFields } from '@/shared/interfaces/entities/client.interface';
import { IComment } from '@/shared/interfaces/entities/comment.interface';
import { IFavorite } from '@/shared/interfaces/entities/favorite.interface';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';
import { INotification } from '@/shared/interfaces/entities/notification.interface';
import { IPayment } from '@/shared/interfaces/entities/payment.interface';
import { IRoute } from '@/shared/interfaces/entities/route.interface';


// export type IUser = Users;



export interface IUser {
  idUser: string;
  imgUser: string;
  email: string;
  username: string;
  name: string;
  surname: string;
  birthdate: Date;
  bio: string;
  password: string;
  role: string;
  isActive: boolean;
  isDeleted: boolean;
  premiumLevel: number;
  premiumUntil: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  followers?: IFollow[];
  followings?: IFollow[];
  comments?: IComment[];
  routes?: IRoute[];
  favorites?: IFavorite[];
  notifications?: INotification[];
  payments?: IPayment[];
}

export interface IUserGeneric extends IUser {
  admin?: IAdminFields;
  client?: IClientFields;
}
