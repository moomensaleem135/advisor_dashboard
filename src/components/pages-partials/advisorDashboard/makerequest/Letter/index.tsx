'use client';
import { COLORS } from '@/constants/colors';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React, { useRef, useState } from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { FlexDiv, Heading, Main, StyledButton } from '../../message/index.styles';
import { StyledTopics } from '../../task/meeting/index.styles';
import SharedLayout from '../../task/sharedLayout';
import {
  ButtonStyle,
  StyledHeading,
  LetterDiv,
  MainStyled,
  StyledText,
  Title
} from './index.styles';

const Letter = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const Name = searchParams.get('name');

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : null);
  };
  const buttons = ['Message Center', 'Make a Request', 'Tasks', 'Training'];

  return (
    <Main>
      <Heading>Your Compliance Requests</Heading>
      <FlexDiv>
        {buttons.map((button, index) => (
          <LinkStyle
            key={index}
            href={`/advisor_dashboard/${button.toLowerCase().replace(/\s+/g, '')}`}
            passHref
          >
            <StyledButton
              key={index}
              style={{
                backgroundColor:
                  button === 'Make a Request' ? `${COLORS.BLUE_600}` : 'default-color',
                color: button === 'Make a Request' ? `${COLORS.WHITE_100}` : 'default-color'
              }}
            >
              {button}
            </StyledButton>
          </LinkStyle>
        ))}
      </FlexDiv>
      <MainStyled>
        <StyledHeading>Make a Request</StyledHeading>
        <Title>{Name}</Title>
        <LetterDiv>
          <StyledText>
            Dear CCO Name, <br />
            Attached please the new brochure for the CITs that we plan on rolling out to new clients
            effective 2/1/24. <br />
            Please look at the attachment and let us know your thoughts by 1/25/24. <br />
            Thanks, <br />
            Tom J
          </StyledText>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <StyledTopics
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={handleClick}
          >
            Attach Doc Here
          </StyledTopics>
          {selectedFileName && <p style={{ textDecoration: 'underline' }}>{selectedFileName}</p>}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <ButtonStyle type="submit">Send Message</ButtonStyle>
          </Box>
        </LetterDiv>
      </MainStyled>
    </Main>
  );
};

export default Letter;
