import { COLORS } from '@/constants/colors';
import Link from 'next/link';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { FlexDiv, Heading, Main, StyledButton } from '../../message/index.styles';

const buttons = ['Message Center', 'Make a Request', 'Tasks', 'Training'];

const SharedLayout = ({ children }: any) => (
  <Main>
    <Heading>Your Compliance Requests</Heading>
    <FlexDiv>
      {buttons.map((button, index) => (
        <LinkStyle
          key={index}
          href={`/advisor_dashboard/${button.toLowerCase().replace(/\s+/g, '')}`}
          passHref
        >
          <StyledButton
            key={index}
            style={{
              backgroundColor: button === 'Tasks' ? `${COLORS.BLUE_600}` : 'default-color',
              color: button === 'Tasks' ? `${COLORS.WHITE_100}` : 'default-color'
            }}
          >
            {button}
          </StyledButton>
        </LinkStyle>
      ))}
    </FlexDiv>
    {children}
  </Main>
);

export default SharedLayout;
