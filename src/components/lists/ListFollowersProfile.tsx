import CardUser from '@/components/cards/CardUser';
import CardUserMobile from '@/compontesPhone/cards/CardUserMobile';
import useMobile from '@/hooks/useMobile.hook';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';

const ListFollowersProfile = ({ followers }: { followers: IFollow[] }) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <div className="grid grid-cols-1 gap-4">
          {followers.map((follow) => (
            <CardUserMobile user={follow.followingUser} key={follow.idUser} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {followers.map((follow) => (
            <CardUser user={follow.followingUser} key={follow.idUser} />
          ))}
        </div>
      )}

      {followers.length === 0 && (
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center text-text1 py-4  text-xl">
            No tienes seguidores
          </div>
        </div>
      )}
    </>
  );
};

export default ListFollowersProfile;
