import { Suspense } from 'react';

import NewPoliciesPartial from '@/components/pages-partials/createNewpolicies';

export default function CreateNewPolicies() {
  return (
    <Suspense fallback={false}>
      <NewPoliciesPartial />
    </Suspense>
  );
}
