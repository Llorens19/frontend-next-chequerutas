import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className="bg-color3 p-2 w-full z-10 fixed bottom-0 flex justify-around items-center shadow-lg">

        <Link href="/list-routes" className = "flex flex-col items-center">
          <MobileIcons icon="search" color="var(--text1)" size={'34px'}/>
          <p className="font-bold text-text1 text-xs">Rutas</p>
        </Link>
        <Link href="/auth" className = "flex flex-col items-center">
          <MobileIcons icon="logged_user" color="var(--text1)" size={'34px'}/>
          <p className="font-bold text-text1 text-xs">Usuario</p>
        </Link>
        <Link href="/create-route" className = "flex flex-col items-center">
          <MobileIcons icon="create_route" color="var(--text1)" size={'34px'}/>
          <p className="font-bold text-text1 text-xs">Crear</p>
        </Link>
        <Link href="/auth" className = "flex flex-col items-center">
          <MobileIcons icon="auth" color="var(--text1)" size={'34px'}/>
          <p className="font-bold text-text1 text-xs">auth</p>
        </Link>
        <Link href="/list-routes" className = "flex flex-col items-center">
          <MobileIcons icon="settings" color="var(--text1)" size={'34px'}/>
          <p className="font-bold text-text1 text-xs">Ajustes</p>
        </Link>

      </nav>
    </>
  );
};

export default Navbar;
