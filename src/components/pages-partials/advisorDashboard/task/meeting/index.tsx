'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

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
  StyledTopics,
  Title
} from './index.styles';

const Meeting = () => {
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
        <Desc>Meeting Attestation</Desc>
        <LetterDiv>
          <Title>Review & Sign - Annual Compliance Meeting Attestation</Title>
          <StyledText>
            Hi (Advisor name), <br />
            Please review the attached meeting attestation below and sign. <br />
            Please let me know if you have any questions or comments regarding the compliance
            meeting agenda <br />
          </StyledText>

          <hr />
          <Title>Year Annual Compliance Review Meeting Attestation</Title>
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
                label="On {Insert Meeting Date} I attended the annual compliance review meeting. During the meeting we
                discussed the topics below. We had time to discuss in detail and ask questions."
              />
            </Box>
          </RadioDiv>
          <Desc style={{ textAlign: 'left' }}>Topics Discussed</Desc>
          <Box sx={{ display: 'flex' }}>
            <FlexBox>
              <StyledTopics>Risk Assessment</StyledTopics>
              <StyledTopics>Book Record</StyledTopics>
              <StyledTopics>Regulatory / Legal Updates</StyledTopics>
              <StyledTopics>Correspondences</StyledTopics>
            </FlexBox>
            <FlexBox>
              <StyledTopics>Risk Assessment</StyledTopics>
              <StyledTopics>Book Record</StyledTopics>
              <StyledTopics>Regulatory / Legal Updates</StyledTopics>
              <StyledTopics>Correspondences</StyledTopics>
            </FlexBox>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <ButtonStyle onClick={handleButton}>Sign & Submit to CCO</ButtonStyle>
          </Box>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </LetterDiv>
      </Main>
    </SharedLayout>
  );
};

export default Meeting;
