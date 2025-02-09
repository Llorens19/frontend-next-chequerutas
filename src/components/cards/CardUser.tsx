import { useProfileFollowMutation, useProfileUnfollowMutation } from '@/reactQuery/mutations/profile.mutation';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const CardUser = ({ user }: { user: IUserGeneric }) => {
  const router = useRouter();

  const onClickUser = () => {
    router.push(`/profile/${user.username}`);
  };



  const follow = useProfileFollowMutation( );

  const unfollow = useProfileUnfollowMutation( );


  const userLogged = useGetUserQuery().data;


  const onFollow = () => {
    follow.mutate( user.idUser);
  };

  const onUnfollow = () => {
    unfollow.mutate( user.idUser);
  };








  return (
    <>
      <div className="flex items-center py-4  px-8 bg-color2  rounded-lg w-full gap-8 cursor-pointer hover:bg-background4 transition"
      onClick={onClickUser}>
        <div className="flex flex-col items-center justify-center align-middle">
          <Image
          src={user?.imgUser ?? '/images/profile/perfil.jpg'}
          className="w-16 h-16 rounded-full"
          alt="User Avatar"
          width={64}
          height={64}
          />
          <p className="text-center text-sm font-medium mt-2 text-contrast2">
            {user.username}
          </p>
        </div>

        <div className="flex-grow text-center">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-white">{user.surname}</p>
        </div>

        { (user.username !== userLogged?.username) && userLogged && (
          userLogged?.followings?.some(following => following.userFollowed === user.idUser) ? (
            <button
              className="bg-color2 text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-color2 transition"
              onClick={(e) => { e.stopPropagation(); onUnfollow(); }}
            >
              <p>Dejar de Seguir</p>
            </button>
          ) : (
            <button
              className="bg-white text-color2 px-4 py-2 rounded-lg border-2 border-white hover:text-white hover:bg-color2 hover:border-white transition"
              onClick={(e) => { e.stopPropagation(); onFollow(); }}
            >
              <p>Seguir</p>
            </button>
          )
        )}

      </div>
    </>
  );
};
export default CardUser;