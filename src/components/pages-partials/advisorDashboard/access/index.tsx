import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { Container, Heading, Main, StyledButton } from './index.styles';
import { useRouter } from 'next/navigation';

const AccessDashboard = () => {
  const router = useRouter();
  const navigation = () => {
    router.push('/advisor_dashboard/phone')
  }
  return (
    <Main>
      <Container>
        <Heading>Access your advisor dahsboard</Heading>
          <StyledButton onClick={navigation} >Get Started</StyledButton>
      </Container>
    </Main>
  );
};
export default AccessDashboard;
