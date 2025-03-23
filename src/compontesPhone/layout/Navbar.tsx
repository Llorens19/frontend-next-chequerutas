'use client';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChangeTheme from '@/components/themes/ChangeTheme';

const Navbar = () => {
  const router = useRouter();
  const { data: user } = useGetUserQuery();

  const onClickProfile = (username: string) => {
    router.push(`/profile/${username}`);
  };

  return (
    <nav className="bg-header p-2 w-full z-[999999] fixed bottom-0 flex justify-around items-center shadow-lg">
      <Link href="/list-routes" className="flex flex-col items-center">
        <MobileIcons icon="search" color="var(--text1)" size={'34px'} />
        <p className="font-bold text-text1 text-xs">Rutas</p>
      </Link>

      {user ? (
        ''
      ) : (
        <Link href="/payments" className="flex flex-col items-center">
          <MobileIcons icon="auth" color="var(--text1)" size={'34px'} />
          <p className="font-bold text-text1 text-xs">Suscribirse</p>
        </Link>
      )}

      {user ? (
        <>
          <Link href="/create-route" className="flex flex-col items-center">
            <MobileIcons
              icon="create_route"
              color="var(--text1)"
              size={'34px'}
            />
            <p className="font-bold text-text1 text-xs">Crear</p>
          </Link>

          <Link
            href="/notifications"
            className="flex flex-col items-center relative"
          >
            <MobileIcons icon="bell" color="var(--text1)" size={'34px'} />
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
            <p className="font-bold text-text1 text-xs">Notificaciones</p>
          </Link>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onClickProfile(user?.username)}
          >
            <MobileIcons
              icon="logged_user"
              color="var(--text1)"
              size={'34px'}
            />
            <p className="font-bold text-text1 text-xs">Usuario</p>
          </div>
        </>
      ) : (
        <Link href="/auth" className="flex flex-col items-center">
          <MobileIcons icon="auth_user" color="var(--text1)" size={'34px'} />
          <p className="font-bold text-text1 text-xs">Login</p>
        </Link>
      )}

      <Link href="/settings" className="flex flex-col items-center">
        <MobileIcons icon="settings" color="var(--text1)" size={'34px'} />
        <p className="font-bold text-text1 text-xs">Ajustes</p>
      </Link>
    </nav>
  );
};

export default Navbar;
