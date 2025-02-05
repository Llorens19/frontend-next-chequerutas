'use client';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';
import { useProfileQuery } from '@/reactQuery/queries/profile.query';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfileUser = ({ username }: { username: string }) => {
  const { data: user, isLoading: isLoadingProfile } = useProfileQuery(username);
  const { data: userLogged, isLoading: isLoadingUserLogged } =
    useGetUserQuery();

  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (userLogged && user) {
      setIsOwner(userLogged.username === user.username);
    }
  }, [userLogged, user]);

  if (isLoadingProfile || isLoadingUserLogged) return <SpinnerLoading />;

  if (!user) return <p>Error</p>;

  return (
    <>
      <div className="mt-20 w-4/5  mx-auto flex gap-4">
        <div className="flex flex-col items-center w-1/4 border-2 border-white rounded-lg py-8">
          <div className="w-1/2">
            <Image
              src={user.imgUser || '/images/profile/perfil.jpg'}
              alt="avatar"
              width={800}
              height={800}
              className="rounded-full border-2 border-white"
            />
          </div>

          <h1 className="text-2xl font-bold mt-2">{user.username}</h1>
          <p className="text-lg text-text3">{user.email}</p>
          <div className="flex gap-2 mt-4">
            <p className="text-sm text-white">{`${user.name} ${user.surname}`}</p>
            <p className="text-sm text-text4 font-bold">{user.birthdate ? new Date(user.birthdate).toLocaleDateString() : ''}</p>
          </div>

          <div className="flex mt-4 w-full mx-8 border-t-2 border-b-2 border-gray-300 p-4">
            <div className="flex flex-col items-center w-1/3 hover:bg-color2 transition rounded-lg">
              <p className="text-2xl font-bold">0</p>
              <p className="text-text3">Rutas</p>
            </div>
            <div className="flex flex-col items-center w-1/3 hover:bg-color2 transition rounded-lg">
              <p className="text-2xl font-bold">0</p>
              <p className="text-text3">Seguidores</p>
            </div>
            <div className="flex flex-col items-center w-1/3 hover:bg-color2 transition rounded-lg">
              <p className="text-2xl font-bold">0</p>
              <p className="text-text3">Siguiendo</p>
            </div>
          </div>
          <div className="flex gap-4">
            {isOwner ? (
              <button className="bg-contrast1 text-color1 px-4 py-2 rounded-lg mt-2">
                <p>Editar Perfil</p>
              </button>
            ) : (
              <button className="bg-contrast1 text-color1 px-4 py-2 rounded-lg mt-2">
                <p>Seguir</p>
              </button>
            )}

            {isOwner && (
              <button className="bg-contrast1 text-color1 px-4 py-2 rounded-lg mt-2">
                <p>Cerrar Sesión</p>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center bg-color4 w-3/4">
          <h1 className="text-2xl font-bold mt-2">{user.username}</h1>
          <p className="text-lg text-gray-500">{user.bio}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
