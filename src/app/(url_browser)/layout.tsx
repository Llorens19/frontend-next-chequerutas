'use client';
import Header from '@/components/layout/Header';
import queryClient from '@/libs/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {



  return (
    <>
      <html lang="es">
        <body suppressHydrationWarning={true} className="bg-color2">
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow h-full">{children}</div>
              <div className="h-1/7 w-full fixed bottom-0">
                {/* <Navbar /> */}
              </div>
            </div>
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
