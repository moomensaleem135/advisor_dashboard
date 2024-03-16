'use client';
import { COLORS } from '@/constants/colors';
import React, { CSSProperties, ReactNode } from 'react';
import { Theme } from 'react-toastify';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { BackText, FlexDiv, Heading, Main, StyledButton } from '../message/index.styles';
import { ButtonDiv, HeadingStyled, MainStyled, StyledBtn, Table } from './index.styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box } from '@mui/material';

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

  const router = useRouter();
  const navigation = () => {
    router.push('/advisor_dashboard/messagecenter');
  };

  return (
    <Main>
      <Box sx={{ display: 'flex', cursor: 'pointer' }} onClick={navigation}>
        <Image src="/svgs/goback.svg" height={30} width={25} alt="" />
        <BackText>Back</BackText>
      </Box>
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
