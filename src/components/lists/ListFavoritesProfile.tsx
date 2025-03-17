import CardRoute from '@/components/cards/CardRoute';
import CardRouteSkeleton from '@/components/cards/skeletons/CardRouteSkeleton';
import CardRouteMobile from '@/compontesPhone/cards/CardRouteMobile';
import useMobile from '@/hooks/useMobile.hook';
import { useFavoriteUserQuery } from '@/reactQuery/queries/favorites.query';

const ListFavoritesProfile = () => {
  const { data: favorites, isLoading } = useFavoriteUserQuery();
  const isMobile = useMobile();

  return (
    <div className="flex-1 overflow-y-auto">
      {!isLoading &&
        favorites?.favorites.map((favorite) =>
          isMobile ? (
            <CardRouteMobile
              route={favorite.route!}
              key={favorite.idFavorite}
            />
          ) : (
            <CardRoute route={favorite.route!} key={favorite.idFavorite} />
          )
        )}
      {isLoading && <CardRouteSkeleton />}
      {!isLoading && favorites?.favorites.length === 0 && (
        <div className="text-center text-text1 py-4  text-xl">
          No tienes rutas guardadas
        </div>
      )}
    </div>
  );
};

export default ListFavoritesProfile;
