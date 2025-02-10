import CardRoute from '@/components/cards/CardRoute';
import { useFavoriteUserQuery } from '@/reactQuery/queries/favorites.query';

const ListFavoritesProfile = () => {

  const { data: favorites } = useFavoriteUserQuery();

  return (
    <div className="flex-1 overflow-y-auto">
      {favorites?.favorites.map((favorite) => (
          <CardRoute route={favorite.route!} key={favorite.idFavorite}/>
      ))}
    </div>
  );
};

export default ListFavoritesProfile;