'use client';

import CardRouteSkeleton from '@/components/cards/skeletons/CardRouteSkeleton';
import LevelRating from '@/components/ratings/LevelRating';
import CategoryIcons from '@/components/SVGs/CategoryIcons';
import useFavorite from '@/hooks/useFavorite.hook';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { IMAGE_SERVICE_URL } from '@/shared/constants/backendServices.constsnts';
import { ICardRouteInput } from '@/shared/interfaces/components/cards/CardRoute.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CardRoute = ({ route }: ICardRouteInput) => {
  const router = useRouter();

  const detailRouteRedirect = () => {
    router.push(`/route/${route.idRoute}`);
  };

  const { data: userLogged, isLoading } = useGetUserQuery();

  const { isFavorite, onFavorite, onUnfavorite } = useFavorite(route.idRoute);

  const onClickProfile = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(`/profile/${route.user?.username}`);
  };

  const [imageUser, setIimageUser] = useState(route.user?.imgUser ||  '/images/profile/perfil.jpg');

  if (isLoading) return <CardRouteSkeleton />;

  const onClickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const filters = { category: route.category?.idCategory };
    const encodedFilters = btoa(JSON.stringify(filters));
    router.push(`/list-routes?filters=${encodedFilters}`);

  };

  const onClickLocation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const filters = { location: route.location?.idLocation };
    const encodedFilters = btoa(JSON.stringify(filters));
    router.push(`/list-routes?filters=${encodedFilters}`);

  };

  return (
    <div
      className="flex bg-color2 rounded-3xl overflow-hidden p-8 my-4 transition "
      onClick={detailRouteRedirect}
    >
      <div className="w-1/2">
        <Image
          className="rounded-3xl w-full h-full"
          src={
            route.imagesRoutes?.[0].imageUrl ||
            `${IMAGE_SERVICE_URL}/images/category/jpg/rutas_boscosas.jpg`
          }
          alt={route.title}
          width={800}
          height={300}
        />
      </div>

      <div className="w-1/2 ml-8 flex flex-col justify-between">
        <div>
          <h3 className="text-4xl font-black text-center text-text1">
            {route.title}
          </h3>
          <div className="flex flex-col align-middle gap-2 mt-4">
            <div className="flex items-center gap-2 " >
              <svg
                width="20"
                height="20"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0C15 0 7 8 7 18c0 12 18 30 18 30s18-18 18-30c0-10-8-18-18-18zm0 25a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                  fill="var(--text1)"
                  stroke="var(--text1)"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-lg text-text4 hover:scale-105 transition-transform cursor-pointer hover:underline" onClick={onClickLocation}>{route.location?.nLocation}</p>
            </div>
            <div className="flex items-center gap-2 "  >

              <div
                className=" cursor-pointer align-middle items-center">
                <CategoryIcons
                  size={'20px'}
                  category={route.category?.imgCategory
                    ?.split('.')
                    .slice(0, -1)
                    .join('.')}
                  color={'var(--text1)'}
                />
              </div>
              <p className="text-lg text-text4 hover:scale-105 transition-transform hover:underline cursor-pointer"  onClick={onClickCategory}>{route.category?.nameCategory}</p>
            </div>
          </div>
          <div className="flex mt-4">
            <ul className="w-1/2">
              <li className="flex flex-col items-center">
                <div className="text-3xl font-black text-text2">
                  {route.distance!.toFixed(2).toString().replace('.', ',')} km
                </div>
                <div className="font-bold text-text4">Distancia</div>
              </li>
              <li className="flex flex-col items-center mt-4">
                <div className="text-3xl font-black text-text2">
                  {route.duration}
                </div>
                <div className="font-bold text-text4">Duración</div>
              </li>
            </ul>
            <ul className="w-1/2 ">
              <li className="flex flex-col items-center">
                <div className="text-3xl font-black text-text2">
                  {route.cumulativeGradient
                    ? Math.round(route.cumulativeGradient)
                    : '-'}{' '}
                  m
                </div>
                <div className="font-bold text-text4">Desnivel</div>
              </li>
              <li className="flex flex-col items-center  mt-4">
                <div className="text-3xl font-black text-text2">
                  {route.level ? (
                    <LevelRating level={Number(route.level)} />
                  ) : (
                    '-'
                  )}
                </div>
                <div className="font-bold text-text4">Nivel</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 w-full  mt-8">
          <div
            className="flex  bg-color4 rounded-full justify-center items-center hover:scale-105 transition-transform cursor-pointer"
            onClick={onClickProfile}
          >
            <Image
              className="w-10 h-10 rounded-full border border-contrast2 object-cover"
              src={imageUser}
              onError={() =>
                setIimageUser(`${IMAGE_SERVICE_URL}/images/profile/perfil.jpg`)
              }
              alt="user"
              width={32}
              height={32}
            />
            <p className="text-center text-text1  px-4">
              {route.user?.username}
            </p>
          </div>

          <div className="flex justify-end items-center align-bottom ml-auto">
            {userLogged &&
              (isFavorite ? (
                <svg
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={onUnfavorite}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                  fill="var(--text1)"
                >
                  <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z" />
                </svg>
              ) : (
                <svg
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={onFavorite}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                  fill="var(--text1)"
                >
                  <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z" />
                </svg>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoute;
