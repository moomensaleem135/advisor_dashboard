import '@/styles/globals.scss';

import { Metadata } from 'next';
import { ReactNode } from 'react';

import SharedLayout from '@/components/layout/shared-layout';
import ProtectedRoute from '@/components/protectedRoute';
import { MainProvider } from '@/components/providers/MainProvider';

export const metadata: Metadata = {
  title: 'SecureRIA Advisor DashBoard',
  description: '🚀'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={'font-primary'} suppressHydrationWarning>
        <MainProvider>
          <ProtectedRoute>
            <SharedLayout>
              <main>{children}</main>
            </SharedLayout>
          </ProtectedRoute>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
