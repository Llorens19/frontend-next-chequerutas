'use client';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';
import { useProfileQuery } from '@/reactQuery/queries/profile.query';

const ProfileUser = ({username}: {username: string}) => {

  const { data, isLoading } = useProfileQuery(username);

  if (isLoading) {
    return <SpinnerLoading/>;
  }

  if (!data) {
    return <p>Error</p>;
  }

  return (
    <>
    <div className="mt-20">
      <h1>{data.username}</h1>
      <p>{data.email}</p>
    </div>
    </>
  );
};

export default ProfileUser;