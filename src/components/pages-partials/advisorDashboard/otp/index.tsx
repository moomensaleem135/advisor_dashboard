'use client';
import { Box } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { Heading, Main } from '../access/index.styles';
import { StyledButton, Title } from '../phone/index.styles';
import { Container, OtpInput } from './index.styles';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const singleDigitValue = value.slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = singleDigitValue;
    setOtp(newOtp);
  };

  return (
    <Main>
      <Container>
        <Heading>Verification Code</Heading>
        <Title htmlFor="name" className="input-label">
          Enter Code
        </Title>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          {otp.map((digit, index) => (
            <OtpInput
              key={index}
              type="number"
              name={`otp[${index}]`}
              maxLength={1}
              placeholder="-"
              value={digit}
              onChange={(e) => handleOtpChange(index, e)}
            />
          ))}
          <LinkStyle href="/advisor_dashboard/messagecenter">
            <StyledButton>Submit Code</StyledButton>
          </LinkStyle>
        </Box>
      </Container>
    </Main>
  );
};

export default Otp;
