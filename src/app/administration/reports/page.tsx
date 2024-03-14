import React, { Suspense } from 'react';

import Reports from '@/components/pages-partials/reports';

export default function Report() {
  return (
    <Suspense fallback={false}>
      <Reports />;
    </Suspense>
  );
}
