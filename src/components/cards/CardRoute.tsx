'use client';

import LevelRating from '@/components/ratings/LevelRating';
import useFavorite from '@/hooks/useFavorite.hook';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { ICardRouteInput } from '@/shared/interfaces/components/cards/CardRoute.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CardRoute = ({ route }: ICardRouteInput) => {
  const router = useRouter();

  const detailRouteRedirect = () => {
    router.push(`/route/${route.idRoute}`);
  };

  const { data: userLogged } = useGetUserQuery();

  const { isFavorite, onFavorite, onUnfavorite } = useFavorite(route.idRoute);

  return (
    <div className="flex bg-color2   rounded-3xl overflow-hidden p-8 mb-8">
      <div className="w-1/2">
        <Image
          className="rounded-3xl"
          src={'/images/category/moto.jpg'}
          alt={route.title}
          width={800}
          height={800}
        />
      </div>

      <div
        className="w-1/2 ml-8 flex flex-col justify-between"
        onClick={detailRouteRedirect}
      >
        <div>
          <h3 className="text-2xl font-bold text-center text-text1">{route.title}</h3>
          <p className="text-sm text-center text-text4 mt-8">{route.description}</p>

          <div className="flex mt-12">
            <ul className="w-1/2">
              <li className="text-text2 font-bold">
                <span className="font-bold text-text4">Distancia</span>{'   '}
                {route.distance!.toFixed(2).toString().replace('.', ',')} km
              </li>
              <li className="text-text2 font-bold">
                <span className="font-bold text-text4">Duración</span>{'   '}
                {route.duration}
              </li>
            </ul>
            <ul className="w-1/2 ">
              <li className="text-text2 font-bold">
                <span className="font-bold text-text4">Desnivel</span>{'   '}
                {route.cumulativeGradient
                  ? route.cumulativeGradient.toString()
                  : '-'}{' '}
                m
              </li >
              <li className="flex gap-2 text-text2 font-bold">
                <span className="font-bold text-text4">Nivel</span>{'   '}
                {route.level ? (
                  <LevelRating level={Number(route.level)} />
                ) : (
                  '-'
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 w-full  ">
            <div className="flex bg-color4 rounded-full justify-center items-center hover:scale-105 transition-transform">
            <Image
              className="w-10 h-10 rounded-full border border-contrast2 object-cover"
              src={'/images/profile/perfil.jpg'}
              alt="test"
              width={32}
              height={32}
            />
            <p className="text-center text-text1  px-4">{route.user?.username}</p>
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
                fill='var(--text1)'
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
                fill='var(--text1)'
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
