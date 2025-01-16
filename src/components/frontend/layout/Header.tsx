
const Header = () => {
  return (
  <>
    <header className="w-full fixed top-0 flex justify-between items-center bg-color2 py-4 text-text1 p-5 z-10">
        <h1 className="text-2xl font-bold">ViaSana</h1>
        <div className="flex items-center space-x-4">


            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="/home" className="hover:text-text1_hover">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/activities" className="hover:text-text1_hover">
                            Actividades
                        </a>
                    </li>
                    <li>
                        <a href="/courts" className="hover:text-text1_hover">
                            Reservas
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" className="hover:text-text1_hover">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-text1_hover" >
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  </>
  );
};

export default Header;
