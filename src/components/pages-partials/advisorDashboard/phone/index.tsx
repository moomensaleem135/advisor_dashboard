'use client';
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { Heading, Main } from '../access/index.styles';
import { Container, StyledButton, StyledInput, Title } from './index.styles';
import { useRouter } from 'next/navigation';

const PhoneNumber = () => {
 const router = useRouter();

  const navigation = ()=>{
    router.push('/advisor_dashboard/otp');

  }
  return (
    <Main>
      <Container>
        <Heading>Phone Number</Heading>
        <Title htmlFor="name" className="input-label">
          Enter Your Cell Phone Number to get Advisor Dashboard Access Code
        </Title>
        <Box sx={{ display: 'flex', gap: '0.5rem', justifyContent:'space-between' }}>
          <StyledInput type="number" autoComplete="off" name="cell" placeholder="+1" />
            <StyledButton  onClick={navigation} >Submit Cell</StyledButton>
        </Box>
      </Container>
    </Main>
  );
};

export default PhoneNumber;
