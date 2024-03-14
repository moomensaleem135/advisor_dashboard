'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel, InputLabel } from '@mui/material';
import React, { useState } from 'react';

import { StyledTopics } from '../meeting/index.styles';
import { RadioDiv } from '../personal/index.styles';
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

const Advertising = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckbox(label === selectedCheckbox ? '' : label);
  };
  const checkboxLabels = ['March', 'June', 'September'];

  return (
    <SharedLayout>
      <Main>
        <Heading>Compliance Tasks</Heading>
        <Desc>Advertising & Marketing Attestation</Desc>
        <LetterDiv>
          <Title>Firm Advertising & Marketing Attestation</Title>
          <StyledText>
            Hi (Advisor name),
            <br />
            Please read the statement below to confirm all marketing and advertising material you
            currently use has been <br />
            submitted to the CCO for review and approval. If not, click the ‘Make a Request’ tab
            above to submit a request.
            <StyledTopics>Training Program</StyledTopics>
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
          </FlexBox>
          <hr />
          <Title>Advertising and Marketing Attestation</Title>
          <RadioDiv>
            <InputLabel variant="standard">Quarter Ending:</InputLabel>
            <Box sx={{ display: 'flex' }}>
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
                label="I have submitted all marketing and advertising materials; i.e., website pages, brochures, emails, slide
                decks and presentations to the CCO for review prior to public dissemination."
              />
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

export default Advertising;
