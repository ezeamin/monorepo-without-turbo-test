import {
  Header,
  LandscapeMenu,
  SkipNavButton,
  SonnerToast,
} from 'puas-components';

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
        <SkipNavButton />
        <LandscapeMenu isLoggedIn={isLoggedIn}>
          {!!isLoggedIn && <Header />}
          <main id='main'>{children}</main>
          <SonnerToast />
        </LandscapeMenu>
      </body>
    </html>
  );
};

export default RootLayout;
