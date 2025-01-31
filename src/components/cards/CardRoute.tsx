import LevelRating from '@/components/ratings/LevelRating';
import { ICardRouteInput } from '@/shared/interfaces/components/cards/CardRoute.interface';
import Image from 'next/image';

const CardRoute = ({ route }: ICardRouteInput) => {
  return (
    <div className="flex bg-color2 shadow-lg rounded-lg overflow-hidden p-8 mb-8">
      <div className="w-1/2">
        <Image
          className="rounded-lg"
          src={'/images/category/moto.jpg'}
          alt={route.title}
          width={800}
          height={800}
        />
      </div>

      <div className="w-1/2 ml-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-center">{route.title}</h3>
          <p className="text-sm text-center text-text4">{route.description}</p>

          <div className="flex mt-8">
            <ul className="w-1/2 ">
              <li>
                <span className="font-bold text-text4">Distancia</span>{' '}
                {route.distance!.toFixed(2).toString().replace('.', ',')} km
              </li>
              <li>
                <span className="font-bold text-text4">Duración</span>{' '}
                {route.duration}
              </li>
            </ul>
            <ul className="w-1/2 ">
              <li>
                <span className="font-bold text-text4">Desnivel</span>{' '}
                {route.cumulativeGradient
                  ? route.cumulativeGradient.toString()
                  : '-'}{' '}
                m
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-text4">Nivel</span>{' '}
                {route.level ? <LevelRating level={Number(route.level)} /> : '-'}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="flex w-1/2 bg-color4 p-2 rounded-lg gap-2 justify-center items-center">
            <Image
              className="w-1/4 rounded-lg border border-contrast2 h-auto object-cover"
              src={'/images/profile/perfil.jpg'}
              alt="test"
              width={800}
              height={800}
            />
            <p className="w-3/4 text-center flex justify-center items-center">
              Llorensssss19
            </p>
          </div>

          <div className="flex w-1/2 justify-end items-center">
            <button className="bg-color4 text-white rounded-lg p-2">
              guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoute;
