'use client';
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { Heading, Main } from '../access/index.styles';
import { Container, StyledButton, StyledInput, Title } from './index.styles';

const PhoneNumber = () => {
  return (
    <Main>
      <Container>
        <Heading>Phone Number</Heading>
        <Title htmlFor="name" className="input-label">
          Enter Your Cell Phone Number to get Advisor Dashboard Access Code
        </Title>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <StyledInput type="number" autoComplete="off" name="cell" placeholder="+1" />
          <Link href="/advisor_dashboard/otp">
            <StyledButton type="submit">Submit Cell</StyledButton>
          </Link>
        </Box>
      </Container>
    </Main>
  );
};

export default PhoneNumber;
