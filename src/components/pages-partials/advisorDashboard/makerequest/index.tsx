'use client';
import { COLORS } from '@/constants/colors';
import React, { CSSProperties, ReactNode } from 'react';
import { Theme } from 'react-toastify';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { FlexDiv, Heading, Main, StyledButton } from '../message/index.styles';
import { ButtonDiv, HeadingStyled, MainStyled, StyledBtn, Table } from './index.styles';

const MakeRequest = () => {
  const buttons = [
    'Marketing / Advertising',
    'Termed Client',
    'Political Contribution',
    'Personal Investment Request',
    'Gifts / Gratuities',
    'Marketing / Advertising',
    'Termed Client',
    'Political Contribution',
    'Personal Investment Request',
    'Gifts / Gratuities'
  ];
  const btns = ['Message Center', 'Make a Request', 'Tasks', 'Training'];

  return (
    <Main>
      <Heading>Your Compliance Requests</Heading>
      <FlexDiv>
        {btns.map((button, index) => (
          <LinkStyle
            key={index}
            href={`/advisor_dashboard/${button.toLowerCase().replace(/\s+/g, '')}`}
            passHref
          >
            <StyledButton
              key={index}
              style={{
                backgroundColor:
                  button === 'Make a Request' ? `${COLORS.BLUE_600}` : 'default-color',
                color: button === 'Make a Request' ? `${COLORS.WHITE_100}` : 'default-color'
              }}
            >
              {button}
            </StyledButton>
          </LinkStyle>
        ))}
      </FlexDiv>
      <MainStyled>
        <HeadingStyled>Make a Request</HeadingStyled>
        <Table>
          <ButtonDiv>
            {buttons.map((button, index) => (
              <LinkStyle
                key={index}
                href={{
                  pathname: '/advisor_dashboard/makearequest/letter',
                  query: {
                    name: `${button}`
                  }
                }}
              >
                <StyledBtn key={index}>{button}</StyledBtn>
              </LinkStyle>
            ))}
          </ButtonDiv>
        </Table>
      </MainStyled>
    </Main>
  );
};

export default MakeRequest;
