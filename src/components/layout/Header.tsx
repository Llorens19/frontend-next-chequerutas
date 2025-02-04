'use client';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { data: user } = useGetUserQuery();

  console.log('user', user);

  return (
    <>
      <header className="w-full fixed top-0 flex justify-between items-center bg-color2 py-4 text-text1 p-5 z-10">
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
                <Link href="/auth">Login/Register</Link>
              </li>
              {user && <li>
                <div className="flex items-center  bg-color5 rounded-lg" onClick={() => console.log('logout')}>
                  <Image
                    src={user?.imgUser || '/images/profile/perfil.jpg'}
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                    width={32}
                    height={32}
                  />
                  <p className='px-4'>{user?.username}</p>
                </div>
              </li> }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
