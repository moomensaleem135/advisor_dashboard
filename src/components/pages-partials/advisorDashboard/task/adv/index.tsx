'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

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

const Review = () => {
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
        <Desc>ADV 2B Review</Desc>
        <LetterDiv>
          <Title>Review & Sign - Annual ADV 2B Review</Title>
          <StyledText>
            Hi (Advisor name), <br />
            Attached in your most recent Firm Brochure supplement (ADV 2B(. Please review and reply
            back to me with any updates or change
            <br />
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
            <BoxesDiv>
              <StyledBox>ADV 2B</StyledBox>
            </BoxesDiv>
          </FlexBox>
          <hr />
          <Title>Year Annual ADV 2B Review and Update</Title>
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
                label="I have reviewed the most recent ADV 2B. I’ve submitted any updates or changes to the CCO by the
                  due date."
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

export default Review;
