import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Button from '@/components/core/Button';

export const MainStyled = styled(Box)`
  border: 1px solid lightgray;
`;

export const StyledHeading = styled(Typography)`
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  margin: 1rem 0;
`;

export const Title = styled(Typography)`
  background-color: ${COLORS.BLUE_600};
  text-align: center;
  font-size: 1.2em;
  padding: 0.5rem;
  border-radius: 3px;
  width: 80%;
  margin: auto;
  color: white;
`;

export const LetterDiv = styled(Box)`
  margin: 1rem 0;
  width: 80%;
  margin: auto;
  padding: 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;

export const StyledText = styled(Typography)`
  line-height: 2;
`;

export const ButtonStyle = styled(Button)`
  margin-top: 1rem;
  padding: 0.3rem;
  font-size: 1em;
  max-height: 2rem;
  background-color: ${COLORS.BLUE_200};
`;
