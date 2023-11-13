import {
  Header,
  LandscapeMenu,
  SkipNavButton,
  SonnerToast,
} from 'puas-components';
import ThemeProvider from '../providers/ThemeProvider';
import ErrorBoundary from '../components/Error/ErrorBoundary';

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
        <ErrorBoundary>
          <ThemeProvider>
            <SkipNavButton />
            <LandscapeMenu isLoggedIn={isLoggedIn}>
              {/* eslint-disable-next-line -- This will be different in the future */}
              {!!isLoggedIn && <Header />}
              <main className='modules-padding' id='main'>
                {children}
              </main>
              <SonnerToast />
            </LandscapeMenu>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
