'use client';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAuthDataSelector } from '@/store/auth';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

import NavBar from '@/components/layout/navbar';

interface SharedLayoutProps {
  children: ReactNode;
}

const SharedLayout = ({ children }: SharedLayoutProps) => {
  const { isAuthenticated } = useAppSelector(getAuthDataSelector);

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      {isAuthenticated && <NavBar />}
      {children}
    </Container>
  );
};

export default SharedLayout;
