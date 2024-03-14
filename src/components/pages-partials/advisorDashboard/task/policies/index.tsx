'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

import { RadioDiv } from '../personal/index.styles';
import SharedLayout from '../sharedLayout';
import {
  BoxesDiv,
  ButtonStyle,
  Desc,
  FlexBox,
  Heading,
  LetterDiv,
  Main,
  StyledBox,
  StyledText,
  Title
} from './index.styles';

const Policies = () => {
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
        <Desc>Policies Attestation</Desc>
        <LetterDiv>
          <Title>Review & Sign - Annual Policies & Procedures Attestation</Title>
          <StyledText>
            Hi (Advisor name),
            <br />
            Please review the attached policies and procedures. Also, note the updates that have
            been made to each in the last 12 months. <br />
            Policy Name:- Insert summary of updates. <br />
            Policy Name:- Insert summary of updates. <br />
            Please let me know if you have any questions or comments regarding the policy updates
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
            <BoxesDiv>
              <StyledBox>Policies & Procedure</StyledBox>
              <StyledBox>Policies & Procedure</StyledBox>
              <StyledBox>Policies & Procedure</StyledBox>
            </BoxesDiv>
          </FlexBox>
          <hr />
          <Title>Policies & Procedures Attestation</Title>
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
                label="I have read the attached regulatory overview and have had time to ask any questions to the CCO."
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

export default Policies;
