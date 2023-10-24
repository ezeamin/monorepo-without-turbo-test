import {
  Header,
  LandscapeMenu,
  SkipNavButton,
  SonnerToast,
} from 'puas-components';
import ThemeProvider from '../providers/ThemeProvider';

// !TEMP
const isLoggedIn = true;

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SkipNavButton />
          <LandscapeMenu isLoggedIn={isLoggedIn}>
            {!!isLoggedIn && <Header />}
            <main id='main'>{children}</main>
            <SonnerToast />
          </LandscapeMenu>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
