'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { StyledTopics } from '../meeting/index.styles';
import { RadioDiv } from '../personal/index.styles';
import { BoxesDiv, StyledBox } from '../policies/index.styles';
import SharedLayout from '../sharedLayout';
import {
  ButtonStyle,
  Desc,
  FlexBox,
  Heading,
  LetterDiv,
  Main,
  StyledText,
  Title
} from './index.styles';

const AnnualExecution = () => {
  return (
    <SharedLayout>
      <Main>
        <Heading>Compliance Tasks</Heading>
        <Desc>Annual Best Execution</Desc>
        <LetterDiv>
          <Title>Annual Best Execution Form</Title>
          <StyledText>
            Hi (Advisor name), <br />
            Please complete the Best Execution form below for all custodians and brokers that are
            currently working with our clients.
            <br />
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
          </FlexBox>
          <StyledTopics>Best Execution Online Form</StyledTopics>
          <hr />
          <Title>Year Annual Best Execution Form Attestation</Title>
          <RadioDiv>
            <Box sx={{ display: 'flex' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkbox"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CircleIcon />}
                    sx={{
                      '&.Mui-checked': {
                        color: `${COLORS.BLUE_200}`,
                        '& .MuiSvgIcon-root': {
                          fill: `${COLORS.BLUE_200}`
                        }
                      }
                    }}
                  />
                }
                label="I have completed all necessary best execution forms for our current custodians and brokers for {year}"
              />
            </Box>
          </RadioDiv>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ButtonStyle type="submit">Sign & Submit to CCO</ButtonStyle>
          </Box>
        </LetterDiv>
      </Main>
    </SharedLayout>
  );
};

export default AnnualExecution;
