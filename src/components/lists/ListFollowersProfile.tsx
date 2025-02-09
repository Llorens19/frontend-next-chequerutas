import CardUser from '@/components/cards/CardUser';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';

const ListFollowersProfile = ({ followers }: { followers: IFollow[] }) => {

  return (
    <div className="grid grid-cols-2 gap-4">
      {followers.map((follow) => (
      <CardUser user={follow.followingUser} key={follow.idUser} />
      ))}
    </div>
  );
};

export default ListFollowersProfile;
