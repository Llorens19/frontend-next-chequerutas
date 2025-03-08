'use client';
import ListCommentsProfile from '@/components/lists/ListCommentsProfile';
import ListRouteProfile from '@/components/lists/ListRoteProfile';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';
import { useProfileQuery } from '@/reactQuery/queries/profile.query';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ListFollowersProfile from '@/components/lists/ListFollowersProfile';
import ListFollowingsProfile from '@/components/lists/ListFollowingsProfile';
import {
  useRoutesUserPrivate,
  useRoutesUserPublic,
} from '@/reactQuery/queries/routes.query';
import {
  useProfileFollowMutation,
  useProfileUnfollowMutation,
} from '@/reactQuery/mutations/profile.mutation';
import ListFavoritesProfile from '@/components/lists/ListFavoritesProfile';
import { useLogoutMutation } from '@/reactQuery/mutations/user.mutations';

const ProfileUser = ({ username }: { username: string }) => {
  const { data: user, isLoading: isLoadingProfile } = useProfileQuery(username);
  const { data: userLogged, isLoading: isLoadingUserLogged } =
    useGetUserQuery();
  const { data: routesPublic, isLoading:isLoadingRoutesUserPublic } = useRoutesUserPublic(username);
  const { data: routesPrivate, isLoading:isLoadingRoutesUserPrivate} = useRoutesUserPrivate(username);

  const follow = useProfileFollowMutation();

  const unfollow = useProfileUnfollowMutation();

  const logout = useLogoutMutation();

  const [isOwner, setIsOwner] = useState(false);
  const [listSelected, setListSelected] = useState('routes-public');
  const [title, setTitle] = useState('Rutas Públicas');



  useEffect(() => {
    if (userLogged && user) {
      setIsOwner(userLogged.username === user.username);
    }
  }, [userLogged, user]);

  if (isLoadingProfile || isLoadingUserLogged) return <SpinnerLoading />;

  if (!user) return <p>Error</p>;

  if (!user) return <p>Error</p>;
  const { followers, followings } = user;

  const onClickPosts = () => {
    setListSelected('posts');
    setTitle('Publicaciones');
  };

  const onClickRoutesPublic = () => {
    setListSelected('routes-public');
    setTitle('Rutas Públicas');
  };

  const onClickRoutesPrivate = () => {
    setListSelected('routes-private');
    setTitle('Rutas Privadas');
  };

  const onClickFollowers = () => {
    setListSelected('followers');
    setTitle('Seguidores');
  };

  const onClickFollowings = () => {
    setListSelected('followings');
    setTitle('Siguiendo');
  };

  const onClickFavorites = () => {
    setListSelected('likes');
    setTitle('Rutas Favoritas');
  };

  const onClickLogout = () => {
    logout.mutate();
  };


  const onFollow = () => {
    follow.mutate(user.idUser);
  };

  const onUnfollow = () => {
    unfollow.mutate(user.idUser);
  };

  console.log({
    isOwner,
    userLogged: !!userLogged,
    isFollower: !userLogged?.followings?.some(
      (following) => following.userFollowed === user.username
    ),
  });

  return (
    <>
      <div className="bg-color1 w-4/5 mx-auto text-center flex justify-center items-center pt-16 h-36 fixed text-5xl right-0 z-10">
        <h1 className="mt-[-8px] w-8/12 text-text1 font-black">{title}</h1>
      </div>

      <div className="mt-36 w-4/5 mx-auto flex">
        <div className="flex flex-col self-start items-center w-1/5 bg-color2 rounded-3xl py-8 fixed  ">
          <div className="w-1/2">
            <Image
              src={user.imgUser || '/images/profile/perfil.jpg'}
              alt="avatar"
              width={800}
              height={800}
              className="rounded-full border-2 border-text1"
            />
          </div>

          <h1 className="text-2xl font-bold mt-2 text-text1">{user.username}</h1>
          <p className="text-lg text-text3">{user.email}</p>
          <div className="flex gap-2 mt-4">
            <p className="text-sm text-text1">{`${user.name} ${user.surname}`}</p>
            <p className="text-sm text-text4 font-bold">
              {user.birthdate
                ? new Date(user.birthdate).toLocaleDateString()
                : ''}
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-4 mx-4 w-4/5">
            {isOwner && (
              <>
                <button className="bg-text1 text-color2 px-4 py-2 rounded-3xl w-1/2 border-2 border-text1 hover:text-text1 hover:bg-color2 hover:border-text1 transition">
                  <p>Editar Perfil</p>
                </button>

                <button className="bg-color2 text-text1 border-2 border-text1 px-4 py-2 rounded-3xl w-1/2 hover:bg-text1 hover:text-color2 transition"
                onClick={onClickLogout}>
                  <p>Cerrar Sesión</p>
                </button>
              </>
            )}

            {!isOwner &&
              userLogged &&
              (userLogged?.followings?.some(
                (following) => following.userFollowed === user.idUser
              ) ? (
                <button
                  className="bg-color2 text-text1 border-2 border-text1 px-4 py-2 rounded-3xl w-1/2 hover:bg-text1 hover:text-color2 transition"
                  onClick={onUnfollow}
                >
                  <p>Dejar de Seguir</p>
                </button>
              ) : (
                <button
                  className="bg-text1 text-color2 px-4 py-2 rounded-3xl w-1/2 border-2 border-text1 hover:text-text1 hover:bg-color2 hover:border-text1 transition"
                  onClick={onFollow}
                >
                  <p>Seguir</p>
                </button>
              ))}

          </div>

          <div className="flex mt-4 w-full mx-8 border-t-2 border-b-2 border-gray-300 p-4">
            <div className="flex flex-col items-center w-1/3 hover:bg-color3 transition rounded-3xl">
              <p className="text-2xl font-bold text-text2">
                {routesPublic?.routes.length ?? 0}
              </p>
              <p className="text-text3">Rutas</p>
            </div>
            <div
              className="flex flex-col items-center w-1/3 hover:bg-color3 transition rounded-3xl"
              onClick={onClickFollowers}
            >
              <p className="text-2xl font-bold text-text2">{followers?.length ?? 0}</p>
              <p className="text-text3">Seguidores</p>
            </div>
            <div
              className="flex flex-col items-center w-1/3 hover:bg-color3 transition rounded-3xl"
              onClick={onClickFollowings}
            >
              <p className="text-2xl font-bold text-text2">{followings?.length ?? 0}</p>
              <p className="text-text3">Siguiendo</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-4 w-full">
            {isOwner && (
              <button
                className="text-contrast2 px-4 py-2 rounded-3xl flex-1 min-w-[120px] hover:underline font-bold hover:text-contrast2_hover"
                onClick={onClickRoutesPrivate}
              >
                Rutas Privadas
              </button>
            )}

            {isOwner && (
              <button
                className="text-contrast2 px-4 py-2 rounded-3xl flex-1 min-w-[120px] hover:underline font-bold hover:text-contrast2_hover"
                onClick={onClickFavorites}
              >
                Rutas Guardadas
              </button>
            )}

            <button
              className="text-contrast2 px-4 py-2 rounded-3xl flex-1 min-w-[120px] hover:underline font-bold hover:text-contrast2_hover"
              onClick={onClickRoutesPublic}
            >
              Rutas Públicas
            </button>
            <button
              className="text-contrast2 px-4 py-2 rounded-3xl flex-1 min-w-[120px] hover:underline font-bold hover:text-contrast2_hover"
              onClick={onClickPosts}
            >
              Publicaciones
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center bg-color1 w-9/12 ml-auto px-16">
          <div className="rounded-3xl w-full">
            {listSelected === 'routes-public' && (
              <ListRouteProfile routes={routesPublic?.routes ?? []} />
            )}

            {listSelected === 'routes-private' && isOwner && (
              <ListRouteProfile routes={routesPrivate?.routes ?? []} />
            )}

            {listSelected === 'posts' && (
              <ListCommentsProfile username={user.username} />
            )}

            {listSelected === 'followers' && (
              <ListFollowersProfile followers={followers ?? []} />
            )}

            {listSelected === 'followings' && (
              <ListFollowingsProfile followings={followings ?? []} />
            )}

            {listSelected === 'likes' && <ListFavoritesProfile />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
