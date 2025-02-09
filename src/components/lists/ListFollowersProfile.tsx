import CardUser from '@/components/cards/CardUser';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';

const ListFollowersProfile = ({ followers }: { followers: IFollow[] }) => {

  return (
    <div>
      {followers.map((follow) => (
        <CardUser user={follow.followingUser} key={follow.idUser} />
      ))}
    </div>
  );
};

export default ListFollowersProfile;
