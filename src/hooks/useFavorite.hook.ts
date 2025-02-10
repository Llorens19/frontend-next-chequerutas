import { useFavoriteMutation, useUnfavoriteMutation } from '@/reactQuery/mutations/favorites.mutations';
import { useFavoriteUserQuery } from '@/reactQuery/queries/favorites.query';


const useFavorite = (idRoute: string) => {

      const { data: favoritesUser } = useFavoriteUserQuery();


      const isFavorite = favoritesUser?.favorites?.some((fav) => fav.idRoute === idRoute);

      const favoriteMutation = useFavoriteMutation(idRoute);
      const unfavoriteMutation = useUnfavoriteMutation(idRoute);


      const onFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        favoriteMutation.mutate(idRoute);
      };

      const onUnfavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        unfavoriteMutation.mutate(idRoute);
      };

    return {isFavorite, onFavorite, onUnfavorite};
};

export default useFavorite;