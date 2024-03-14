import { Suspense } from 'react';

import PartialRequest from '@/components/pages-partials/request';

export default function Request() {
  return (
    <Suspense fallback={false}>
      <PartialRequest />
    </Suspense>
  );
}
