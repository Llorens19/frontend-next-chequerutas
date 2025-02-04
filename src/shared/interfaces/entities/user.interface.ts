import { IAdminFields } from '@/shared/interfaces/entities/admin.interface';
import { IClientFields } from '@/shared/interfaces/entities/client.interface';
import { Users } from '@prisma/client';





export type IUser = Users;





// export interface IUser {
//   idUser: string;
//   imgUser: string;
//   email: string;
//   username: string;
//   name: string;
//   surname: string;
//   birthdate: Date;
//   bio: string;
//   password: string;
//   role: string;
//   isActive: boolean;
//   isDeleted: boolean;
//   premiumLevel: number;
//   createdAt?: Date;
//   updatedAt?: Date;
//   achievementsUsers?: any[];
//   comments?: IComment[];
//   favorites?: any[];
//   notificationsUsers?: any[];
//   refreshTokens?: any[];
//   routes?: IRoute[];
//   usersRatings?: any[];
// }

export interface IUserGeneric extends IUser {
  admin?: IAdminFields;
  client?: IClientFields;
}
