import { Header } from 'puas-components';

import 'global-styles/global.css';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
};

export default RootLayout;
