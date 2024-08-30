import "./globals.css";
import ClientLayout from './layout.client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
