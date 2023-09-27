// eslint-disable-next-line import/no-extraneous-dependencies -- no
import "global-styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
