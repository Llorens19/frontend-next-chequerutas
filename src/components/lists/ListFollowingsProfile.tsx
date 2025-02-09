import CardUser from '@/components/cards/CardUser';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';

const ListFollowingsProfile = ({ followings }: { followings: IFollow[] }) => {
  console.log({ followings });
  return (
    <div className="grid grid-cols-2 gap-4">
      {followings.map((follow) => (
        <CardUser user={follow.followerUser} key={follow.idUser} />
      ))}
    </div>
  );
};

export default ListFollowingsProfile;
