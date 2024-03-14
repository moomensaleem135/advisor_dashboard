import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { Container, Heading, Main, StyledButton } from './index.styles';

const AccessDashboard = () => {
  return (
    <Main>
      <Container>
        <Heading>Access your advisor dahsboard</Heading>
        <LinkStyle href="/advisor_dashboard/phone">
          <StyledButton>Get Started</StyledButton>
        </LinkStyle>
      </Container>
    </Main>
  );
};
export default AccessDashboard;
