import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Button from '@/components/core/Button';

export const Main = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Container = styled(Box)`
  max-width: 40%;
  padding: 3rem 6rem;

  border: 1px solid lightgray;
`;

export const Heading = styled(Typography)`
  color: ${COLORS.BLUE_200};
  font-weight: 800;
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  padding: 0.4rem;
  font-size: 0.8em;
  margin: auto;
  background-color: ${COLORS.BLUE_200};
`;
