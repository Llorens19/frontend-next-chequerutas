'use client';
import ChangeTheme from '@/components/themes/ChangeTheme';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { data: user , isLoading} = useGetUserQuery();

  const onClickProfile = (username: string) => {
    router.push(`/profile/${username}`);
  };

  console.log('user', user);

  return (
    <>
      <header className="w-full fixed top-0 flex justify-between items-center h-16 bg-header py-4 text-white p-5 z-[8000]">
        <h1 className="text-2xl font-bold">ViaSana</h1>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex gap-4 align-middle items-center">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/list-routes">Rutas</Link>
              </li>

              <li>
                <Link href="/payments">Suscribirse</Link>
              </li>

              {user ? (
                <li>
                  <div
                    className="flex items-center bg-color3 rounded-full hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => onClickProfile(user?.username)}
                  >
                    <Image
                      src={user?.imgUser || '/images/profile/perfil.jpg'}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                      width={32}
                      height={32}
                    />
                    <p className="px-4 text-text1">{user?.username}</p>
                  </div>
                </li>
              ) : (
                <li>
                  <Link href="/auth">Login/Register</Link>
                </li>
              )}

              <li>
              <ChangeTheme />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
