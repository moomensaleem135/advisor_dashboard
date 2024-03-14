import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

import Button from '@/components/core/Button';

interface IButtonProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Main = styled(Box)`
  width: 70rem;
  margin: auto;
  margin-top: 1rem;
`;

export const Heading = styled(Typography)`
  text-align: center;
  font-weight: 800;
  font-size: 2em;
`;

export const FlexDiv = styled(Box)`
  display: flex;
  border: 1px solid lightgray;
  padding: 1rem;
  padding-bottom: 0;
  gap: 1rem;
  margin-top: 1rem;
`;
export const FlexBox = styled(Box)`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 0;
  gap: 1rem;
  margin-top: 1rem;
`;

export const StyledButton: React.FC<IButtonProps> = styled(Button)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f4f5f6;
  color: black;
  font-weight: 500;
  .blue-button {
    background-color: ${COLORS.BLUE_600};
    color: ${COLORS.WHITE_100};
  }
`;
