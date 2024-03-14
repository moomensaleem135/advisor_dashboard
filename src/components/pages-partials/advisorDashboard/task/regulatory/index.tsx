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
  Title
} from './index.styles';

const Regulatory = () => {
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
        <Desc>Regulatory / News Updates</Desc>
        <LetterDiv>
          <Title>News Update.Please Review.Signature Required</Title>
          <StyledText>
            Dear Advisor, <br /> Attached you willfind an overview regarding the latest SEC rule.
            Please (1) read the attached bulletin, (2) mark the button below acknowledging your
            review and (3) sign the form electronically. <br /> Please let me know if you have any
            questions or comments regarding the material.
          </StyledText>
          <FlexBox>
            {' '}
            <StyledText>Bryan CCO</StyledText>{' '}
            <Image src="/svgs/pdfdoc.svg" width={30} height={30} alt="" />
          </FlexBox>
          <hr />
          <Title>Firm Regulatory Update / News Review</Title>
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

export default Regulatory;
