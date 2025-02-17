'use client';
import ChangeTheme from '@/components/themes/ChangeTheme';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Bell } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: user, isLoading } = useGetUserQuery();

  const onClickProfile = (username: string) => {
    router.push(`/profile/${username}`);
  };

  return (
    <>
      <header className="w-full fixed top-0 flex justify-between items-center h-16 bg-header py-4 text-white p-5 z-[8000]">
        <h1 className="text-2xl font-bold">CheQueRutas</h1>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex gap-4 align-middle items-center">
              <li className={pathname === '/' ? 'font-bold' : ''}>
                <Link href="/">Inicio</Link>
              </li>
              <li className={pathname === '/list-routes' ? 'font-bold' : ''}>
                <Link href="/list-routes">Rutas</Link>
              </li>
              {user?.premiumLevel && user?.premiumLevel > 0 ? (
                ''
              ) : (
                <li className={pathname === '/payments' ? 'font-bold' : ''}>
                  <Link href="/payments">Suscribirse</Link>
                </li>
              )}

              {user ? (
                <>
                  <li
                    className={pathname === '/create-route' ? 'font-bold' : ''}
                  >
                    <Link href="/create-route">Crear Ruta</Link>
                  </li>

                  <li className="relative cursor-pointer">
                    <Link href="/notifications">
                      <Bell className="w-6 h-6" />

                      {user.notifications &&
                        user.notifications?.filter(
                          (notification) => !notification.readed
                        ).length > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {
                              user.notifications?.filter(
                                (notification) => !notification.readed
                              ).length
                            }
                          </span>
                        )}
                    </Link>
                  </li>

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
                </>
              ) : (
                <li className={pathname === '/auth' ? 'font-bold' : ''}>
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
