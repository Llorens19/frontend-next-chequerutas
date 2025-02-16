import CardRoute from '@/components/cards/CardRoute';
import CardRouteSkeleton from '@/components/cards/skeletons/CardRouteSkeleton';
import { useFavoriteUserQuery } from '@/reactQuery/queries/favorites.query';

const ListFavoritesProfile = () => {

  const { data: favorites, isLoading } = useFavoriteUserQuery();


  return (
    <div className="flex-1 overflow-y-auto">
      {!isLoading &&favorites?.favorites.map((favorite) => (
          <CardRoute route={favorite.route!} key={favorite.idFavorite}/>
      ))}
      {isLoading && <CardRouteSkeleton />}
      {!isLoading && favorites?.favorites.length === 0 && (
        <div className="text-center text-text1 py-4  text-xl">No tienes rutas guardadas</div>
      )}
    </div>



  );
};

export default ListFavoritesProfile;