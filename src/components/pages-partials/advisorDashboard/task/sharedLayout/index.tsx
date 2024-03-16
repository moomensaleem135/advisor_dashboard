import { COLORS } from '@/constants/colors';
import Link from 'next/link';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { BackText, FlexDiv, Heading, Main, StyledButton } from '../../message/index.styles';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const buttons = ['Message Center', 'Make a Request', 'Tasks', 'Training'];

const SharedLayout = ({ children }: any) => {
  const router = useRouter(); 

  const navigation = () => {
    router.push('/advisor_dashboard/messagecenter');
  }

  return (
    <Main>
      <Box sx={{display:'flex', cursor:'pointer'}} onClick={navigation} >
      <Image src="/svgs/goback.svg" height={30} width={25} alt='' />
        <BackText>Back</BackText>
      </Box>
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
}

export default SharedLayout;
