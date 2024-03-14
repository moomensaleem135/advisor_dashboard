'use client';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { ChangeEvent, useRef, useState } from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import {
  ButtonDiv,
  ButtonStyle,
  Heading,
  InputDiv,
  Main,
  OtpContainer,
  OtpInput,
  StyledButton,
  StyledInput,
  StyledTypo,
  Title
} from './index.styles';

const initialValues = {
  cell: '',
  otp: ['', '', '', '', '', '']
};

const AdvisorDashboard = () => {
  const handleOtpChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const singleDigitValue = value.slice(0, 1);
    const newOtp = [...formik.values.otp];
    newOtp[index] = singleDigitValue;

    formik.setFieldValue('otp', newOtp);
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });
  const buttonLabels = [
    'Marketing Request',
    'Personal Security Reports',
    'Gift Request',
    'Attestations',
    'Outside Business Activities',
    'Client File Review',
    'Attestations'
  ];

  return (
    <>
      <Main>
        <Heading>Advisor Dashboard</Heading>
        <form onSubmit={formik.handleSubmit}>
          <InputDiv>
            <StyledTypo>Step 1</StyledTypo>
            <Title htmlFor="name" className="input-label">
              Enter Your Cell Phone Number to get Advisor Dashboard Access Code
            </Title>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <StyledInput
                type="number"
                autoComplete="off"
                name="cell"
                placeholder="+1"
                value={formik.values.cell}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ButtonStyle type="submit">Submit Cell</ButtonStyle>
            </Box>
          </InputDiv>
          <InputDiv>
            <StyledTypo>Step 2</StyledTypo>
            <Title htmlFor="name" className="input-label">
              Enter Code
            </Title>

            <Box sx={{ display: 'flex', gap: '1rem' }}>
              {formik.values.otp.map((digit, index) => (
                <OtpInput
                  key={index}
                  type="number"
                  name={`otp[${index}]`}
                  maxLength={1}
                  placeholder="-"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e)}
                  onBlur={formik.handleBlur}
                />
              ))}
              <ButtonStyle type="submit">Submit Code</ButtonStyle>
            </Box>
          </InputDiv>
        </form>
        <ButtonDiv>
          {buttonLabels.map((label, index) => (
            <LinkStyle
              key={index}
              href={{
                pathname: '/advisor_form',
                query: {
                  name: `${label}`
                }
              }}
            >
              <StyledButton key={index}>{label}</StyledButton>
            </LinkStyle>
          ))}
        </ButtonDiv>
      </Main>
    </>
  );
};

export default AdvisorDashboard;
