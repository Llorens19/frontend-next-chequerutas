import CardUser from '@/components/cards/CardUser';
import { IFollow } from '@/shared/interfaces/entities/follow.interface';

const ListFollowingsProfile = ({followings}:{followings: IFollow[]}) => {

  console.log({followings});
  return (
    <div>

{followings.map((follow) => (
        <CardUser user={follow.followerUser} key={follow.idUser} />
      ))}


    </div>
  );
};

export default ListFollowingsProfile;