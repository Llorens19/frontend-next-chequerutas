'use client';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: user } = useGetUserQuery();

  const onClickProfile = (username: string) => {
    router.push(`/profile/${username}`);
  };

  const getColor = (path: string) =>
    pathname === path ? 'var(--text1_hover)' : 'var(--text1)';

  return (
    <nav className="bg-header p-2 w-full z-[999999] fixed bottom-0 flex justify-around items-center shadow-lg">
      <Link href="/" className="flex flex-col items-center">
        <MobileIcons icon="home" color={getColor('/')} size={'34px'} />
        <p
          className={`font-bold text-xs ${
            pathname === '/' ? 'text-text1_hover' : 'text-text1'
          }`}
        >
          inicio
        </p>
      </Link>

      <Link href="/list-routes" className="flex flex-col items-center">
        <MobileIcons
          icon="search"
          color={getColor('/list-routes')}
          size={'34px'}
        />
        <p
          className={`font-bold text-xs ${
            pathname === '/list-routes' ? 'text-text1_hover' : 'text-text1'
          }`}
        >
          Rutas
        </p>
      </Link>

      {user ? (
        ''
      ) : (
        <Link href="/payments" className="flex flex-col items-center">
          <MobileIcons
            icon="auth"
            color={getColor('/payments')}
            size={'34px'}
          />
          <p
            className={`font-bold text-xs ${
              pathname === '/payments' ? 'text-text1_hover' : 'text-text1'
            }`}
          >
            Suscribirse
          </p>
        </Link>
      )}

      {user ? (
        <>
          <Link href="/create-route" className="flex flex-col items-center">
            <MobileIcons
              icon="create_route"
              color={getColor('/create-route')}
              size={'34px'}
            />
            <p
              className={`font-bold text-xs ${
                pathname === '/create-route' ? 'text-text1_hover' : 'text-text1'
              }`}
            >
              Crear
            </p>
          </Link>

          <Link
            href="/notifications"
            className="flex flex-col items-center relative"
          >
            <MobileIcons
              icon="bell"
              color={getColor('/notifications')}
              size={'34px'}
            />
            {user.notifications &&
              user.notifications?.filter((notification) => !notification.readed)
                .length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {
                    user.notifications?.filter(
                      (notification) => !notification.readed
                    ).length
                  }
                </span>
              )}
            <p
              className={`font-bold text-xs ${
                pathname === '/notifications'
                  ? 'text-text1_hover'
                  : 'text-text1'
              }`}
            >
              Buzón
            </p>
          </Link>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onClickProfile(user?.username)}
          >
            <MobileIcons
              icon="logged_user"
              color={getColor(`/profile/${user?.username}`)}
              size={'34px'}
            />
            <p
              className={`font-bold text-xs ${
                pathname === `/profile/${user?.username}`
                  ? 'text-text1_hover'
                  : 'text-text1'
              }`}
            >
              Usuario
            </p>
          </div>
        </>
      ) : (
        <Link href="/auth" className="flex flex-col items-center">
          <MobileIcons
            icon="auth_user"
            color={getColor('/auth')}
            size={'34px'}
          />
          <p
            className={`font-bold text-xs ${
              pathname === '/auth' ? 'text-text1_hover' : 'text-text1'
            }`}
          >
            Login
          </p>
        </Link>
      )}

      <Link href="/settings" className="flex flex-col items-center">
        <MobileIcons
          icon="settings"
          color={getColor('/settings')}
          size={'34px'}
        />
        <p
          className={`font-bold text-xs ${
            pathname === '/settings' ? 'text-text1_hover' : 'text-text1'
          }`}
        >
          Ajustes
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
