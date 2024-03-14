import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Button from '@/components/core/Button';

export const Main = styled(Box)`
  border: 1px solid lightgray;
`;

export const Heading = styled(Typography)`
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

export const LetterDiv = styled(Box)`
  border: 1px solid lightgray;
  width: 90%;
  margin: auto;
  padding: 1.5rem;
  line-height: 8rem;
`;
export const Title = styled(Typography)`
  font-size: 1.5em;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
`;
export const Container = styled.div`
  counter-reset: section;
`;

export const StyledText = styled(Typography)`
  font-weight: 500;
  line-height: 2;
  counter-increment: section;
  &::before {
    content: counter(section) '.';
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const FlexBox = styled(Box)`
  margin-top: 1rem;
`;
export const ButtonStyle = styled(Button)`
  margin-top: 1rem;
  padding: 0.3rem;
  font-size: 1em;
  max-height: 2rem;
  background-color: ${COLORS.BLUE_200};
`;
