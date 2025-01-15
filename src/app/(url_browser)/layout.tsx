import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <html lang="es">
                <body suppressHydrationWarning={true}>
                    {' '}
                    {/* suppressHydrationWarning revisar */}
                    {/* <UserProvider> */}
                    {/* <Header /> */}
                    {children}
                    Hola
                    {/* <Footer /> */}
                    {/* </UserProvider> */}
                </body>
            </html>
        </>
    );
};

export default RootLayout;
