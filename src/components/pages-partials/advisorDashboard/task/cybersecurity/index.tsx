'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

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

const Cybersecurity = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButton = (event: any) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <SharedLayout>
      <Main>
        <Heading>Compliance Tasks</Heading>
        <Desc>Annual Cybersecurity Training Begins</Desc>
        <LetterDiv>
          <Title>Annual Cybersecurity Training Begins</Title>
          <StyledText>
            Hi (Advisor name), <br />
            Click here to access this year’s cybersecurity training
            <br />
            <StyledTopics>Training Program</StyledTopics>
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
          </FlexBox>
          <hr />
          <Title>Year Cybersecurity Training Program</Title>
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
                label="I’ve received this year’s cybersecurity training program notice and will complete all training by the due
                  date."
              />
            </Box>
          </RadioDiv>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <ButtonStyle onClick={handleButton}>Sign & Submit to CCO</ButtonStyle>
          </Box>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </LetterDiv>
      </Main>
    </SharedLayout>
  );
};

export default Cybersecurity;
