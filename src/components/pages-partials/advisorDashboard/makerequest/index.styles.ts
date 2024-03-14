import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Button from '@/components/core/Button';

export const MainStyled = styled(Box)`
  border: 1px solid lightgray;
`;

export const HeadingStyled = styled(Typography)`
  font-weight: bold;
  text-align: center;
  font-size: 1.5em;
  margin: 1rem 0;
`;

export const Table = styled(Box)`
  width: 90%;
  margin: auto;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  padding: 1rem 0;
`;
export const ButtonDiv = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 9rem;
  padding: 1rem;
`;
export const StyledBtn = styled(Button)`
  padding: 1rem;
  width: 18rem;
  font-size: 1em;
  background-color: ${COLORS.BLUE_600};
`;
