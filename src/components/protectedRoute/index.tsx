'use client';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAuthDataSelector } from '@/store/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector(getAuthDataSelector);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
