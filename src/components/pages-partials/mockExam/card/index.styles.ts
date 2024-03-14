import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { ButtonStyled } from '@/components/core/Button/Button.styles';

const TextDivProp = ({ border = '#FFFFFF' }) => css`
  border: 1px solid ${border};
`;

export const Container = styled(Box)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDiv = styled(Box)`
  /* margin-top: 20px; */
  max-width: 11.7rem;
  gap: 10px;
`;
export const UpperText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;
export const LowerText = styled(Typography)`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 500;
`;
export const TextDiv = styled(Box)`
  ${TextDivProp}
  padding: 0.5rem;
  background-color: white;
  max-width: 11.7rem;
  text-align: left;
`;

export const StyledButton = styled(ButtonStyled)`
  width: 100%;
  border-radius: 0;
  font-size: 17px;
  font-weight: 550;
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  color: ${(props) =>
    props.backgroundColor === '#8AB9FF' || props.backgroundColor === '#D7E5FA' ? 'black' : 'white'};
`;
