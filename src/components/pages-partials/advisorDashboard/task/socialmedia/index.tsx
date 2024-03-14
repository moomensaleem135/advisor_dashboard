'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel, InputLabel } from '@mui/material';
import React, { useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

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

const SocialMedia = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckbox(label === selectedCheckbox ? '' : label);
  };
  const checkboxLabels = ['March', 'June', 'September'];
  const texts = [
    'During this quarter I have not used texting, private messaging or social media for communication with clients.',
    'During this quarter I’ve submitted all social media posts and engagements to the CCO prior to posting'
  ];

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
        <Desc>Social Media / Off Channel Attestation</Desc>
        <LetterDiv>
          <Title>Social Media / Off Channel Attestation</Title>
          <StyledText>
            Hi (Advisor name),
            <br />
            Please review and the confirm the statements regarding your social media and off channel
            client communications.
          </StyledText>
          <FlexBox>
            <StyledText>Bryan CCO</StyledText>
          </FlexBox>
          <hr />
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
          <Title>Social Media / Off Channel Communication Attestation</Title>

          <RadioDiv>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {texts.map((label, index) => (
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
            <ButtonStyle onClick={handleButton}>Sign & Submit to CCO</ButtonStyle>
          </Box>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </LetterDiv>
      </Main>
    </SharedLayout>
  );
};

export default SocialMedia;
