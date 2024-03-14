import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

import Button from '@/components/core/Button';

interface IButtonProps {
  children: ReactNode;
  style: CSSProperties;
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

export const StyledButton: React.FC<IButtonProps> = styled(Button)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f4f5f6;
  color: black;
  font-weight: 500;
`;

export const FormMain = styled(Box)`
  border: 1px solid lightgray;
`;

export const Title = styled(Typography)`
  color: ${COLORS.BLUE_200};
  text-decoration: underline;
  font-size: 1.5em;
  text-align: center;
  margin-top: 1rem;
`;
export const Desc = styled(Typography)`
  font-weight: 800;
  font-size: 1.2em;
  text-align: center;
  margin: 1rem 0rem;
`;

export const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled(Box)`
  border: 1px solid lightgray;
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;
  margin: auto;
  counter-reset: section;
`;
export const TextDiv = styled(Box)`
  display: flex;
  text-align: left;
  align-items: center;
  gap: 1rem;
  width: 50%;
`;

export const StyledText = styled(Typography)`
  line-height: 3;
  counter-increment: section;
  &::before {
    content: counter(section) '.';
    font-weight: bold;
  }
`;

export const Icon = styled(Image)`
  object-fit: cover;
`;

export const ButtonDiv = styled(Box)``;

export const ButtonStyle = styled(Button)`
  padding: 0.3rem;
  font-size: 1em;
  max-height: 2rem;
  background-color: ${COLORS.BLUE_200};
`;

export const ImageDiv = styled(Box)`
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
export const ResourceDiv = styled(Box)`
  width: 100%;
`;

export const Head = styled(Typography)`
  font-weight: 800;
  font-size: 1.2em;
  text-decoration: underline;
`;
export const Detail = styled(Typography)`
  margin: 0.7rem 0;
`;
