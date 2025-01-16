import Header from '@/components/frontend/layout/Header';
import Navbar from '@/components/frontend/layout/Navbar';

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="es">
        <body suppressHydrationWarning={true} className="bg-color2">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow h-full">{children}</div>
            <div className="h-1/7 w-full fixed bottom-0">
              {/* <Navbar /> */}
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
