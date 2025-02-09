import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CardUser = ({ user }: { user: IUserGeneric }) => {
  const router = useRouter();

  const onClickUser = () => {
    router.push(`/profile/${user.username}`);
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

        <div
          v-if="isFollowing && userLogged.username === usernameUrl"
        >
          <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg">
            Dejar de seguir
          </button>
        </div>
      </div>
    </>
  );
};
export default CardUser;