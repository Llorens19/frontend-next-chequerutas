import ProfilePage from '@/components/pages/ProfilePage';
import { ProfileQueryService } from '@/services/queries/profile.queryService';
import { Metadata } from 'next';

export const generateMetadata = async ({params}: { params: { username: string }}): Promise<Metadata> => {
  const { username } = await Promise.resolve(params);

  if (!username ) return {};

  const profile = await ProfileQueryService.getProfileByUsername(username);

  return profile ? { title: profile.username } : {};
};

const Profile = async ({ params }: { params: { username: string } }) => {
  const { username } = await Promise.resolve(params);

  return (
    <>
      <ProfilePage username={username} />
    </>
  );
};

export default Profile;
