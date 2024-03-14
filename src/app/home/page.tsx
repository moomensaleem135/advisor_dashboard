import { Suspense } from 'react';

import HomePage from '@/components/pages-partials/home';

export default function Home() {
  return (
    <Suspense fallback={false}>
      <HomePage />
    </Suspense>
  );
}
