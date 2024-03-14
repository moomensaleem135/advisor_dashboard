'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel, InputLabel, Typography } from '@mui/material';
import React, { useState } from 'react';

import { RadioDiv } from '../personal/index.styles';
import SharedLayout from '../sharedLayout';
import {
  ButtonStyle,
  Container,
  Desc,
  FlexBox,
  Heading,
  LetterDiv,
  Main,
  StyledText,
  Title
} from './index.styles';

const OnBoarding = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckbox(label === selectedCheckbox ? '' : label);
  };

  const texts = [
    'Please review the following firm policy statements and check the boxes that you have read them fully and understand each of their requirements.',
    'Review the firm policies listed below and the task the CCO all questions you many have.',
    'Each Month firm members are required to take part in cybersecurity training.',
    'Finally, click the link to complete the new hire personal securities transaction report Please let me know if you have question.'
  ];

  const checkboxLabels = [
    'I agree to submit all marketing and advertising material including social media posts to the CCO for approval prior to pasting or public dissemination.',
    'I will not use texting, private messaging or social media for communication with clients or for any other significant business purpose. All communication with clients will be done through our secure email system, phone or direct mail.',
    'I have read each of the Firms policies including the Code of Ethics, Policies & Procedures Manual & Social Media Policy I understand their requirements and I was given enough time to ask the CCO all my questions.',
    'I agree to use the Firm Communication System (SecureRIA) for all requests and other messages to the CCO.',
    'I will begin the 10-minute training on the Firm Communication System (SecureRIA) within 48 hours of the date of this attestation.',
    'I will begin Month 1 of the Firms Cybersecurity Training Here.',
    'I will complete the New Advisor Personal Securities Transaction Report.'
  ];

  return (
    <SharedLayout>
      <Main>
        <Heading>Compliance Tasks</Heading>
        <Desc>New Advisor Onboarding</Desc>
        <LetterDiv>
          <Title>New Advisor Onboarding Checklist</Title>
          <Typography>Hi (Advisor name),</Typography>
          <Container>
            {texts.map((text, index) => (
              <StyledText key={index}>{text}</StyledText>
            ))}
          </Container>
          <FlexBox>
            <Typography>Thank You</Typography>
            <Typography>Bryan</Typography>
            <Typography>CCO</Typography>
          </FlexBox>
          <hr />
          <Title>New Advisor Attestation</Title>
          <RadioDiv>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {checkboxLabels.map((label, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      key={index}
                      name="checkbox"
                      value={label}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CircleIcon />}
                      checked={label === selectedCheckbox}
                      onChange={() => handleCheckboxChange(label)}
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
                  label={label}
                />
              ))}
            </Box>
          </RadioDiv>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <ButtonStyle type="submit">Sign & Submit to CCO</ButtonStyle>
          </Box>
        </LetterDiv>
      </Main>
    </SharedLayout>
  );
};

export default OnBoarding;
