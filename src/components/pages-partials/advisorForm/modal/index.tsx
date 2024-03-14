import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/core/Button';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  line-height: 0;
`;
const Heading = styled(Typography)`
  font-weight: 800;
  text-align: center;
  width: 100%;
`;

const StyledImage = styled(Image)`
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  line-height: 0;
`;
const FlexDiv = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled(Image)`
  /* margin-top: 4px; */
  object-fit: cover;
`;
const StyledTypography = styled(Typography)``;
const StyledText = styled(Typography)`
  font-weight: 800;
`;

const UnderlineContainer = styled(Box)``;
const StyledButton = styled(Button)`
  align-items: center;
  margin-top: 1rem;
  padding: 0.3rem;
  font-size: 1em;
  background-color: ${COLORS.BLUE_200};
`;
const ButtonDiv = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Modal = ({ isOpen, onClose }: any) => {
  const [isApproved, setApproved] = useState(false);

  const handleCheck = () => {
    setApproved(true);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    onClose(true);
  };
  if (!isOpen) return null;
  const currentDate = new Date();
  const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}/${currentDate.getFullYear()}`;

  return (
    <ModalOverlay>
      <ModalContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            lineHeight: '0',
            alignItems: 'center'
          }}
        >
          <Heading>Adopt Signature and Submit</Heading>
          <p style={{ textAlign: 'left', margin: '0', cursor: 'pointer' }} onClick={handleClick}>
            <Image src="/svgs/cross.svg" width={10} height={10} alt="" />
          </p>
        </Box>
        <hr />
        <StyledImage src="/svgs/sign.svg" height={100} width={100} alt="" />
        <hr />
        <FlexDiv>
          <Box sx={{ display: 'flex', flexDirection: 'row' }} onClick={handleCheck}>
            <Box sx={{ marginTop: '0.3rem' }}>
              {isApproved ? (
                <Icon src="/svgs/check.svg" height={15} width={15} alt="" />
              ) : (
                <Icon src="/svgs/check.svg" height={15} width={15} alt="" />
              )}
            </Box>
            <StyledTypography style={{ color: isApproved ? 'green' : 'black', cursor: 'pointer' }}>
              {isApproved ? 'Approved' : 'Click to Approve Signature'}
              <hr />
            </StyledTypography>
          </Box>
          <UnderlineContainer>
            <StyledTypography>{formattedDate}</StyledTypography>
            <hr />
          </UnderlineContainer>
        </FlexDiv>
        <FlexDiv>
          <StyledText>Signature</StyledText>
          <StyledText>Date</StyledText>
        </FlexDiv>
        <ButtonDiv>
          <StyledButton type="submit">Approved</StyledButton>
        </ButtonDiv>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
