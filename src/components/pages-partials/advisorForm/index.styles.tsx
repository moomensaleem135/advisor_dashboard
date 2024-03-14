import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

import Button from '@/components/core/Button';

import { StyledButton } from '../advisor/index.styles';

interface IButtonProp {
  children: ReactNode;
  styles: CSSProperties;
}

export const Main = styled(Box)`
  width: 90%;
  margin: auto;
  margin-top: 1rem;
`;

export const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 800;
  color: #2e3338;
  max-width: 60%;
  margin: auto;
`;

export const ButtonDiv = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const StyleButton: React.FC<IButtonProp> = styled(StyledButton)`
  font-size: 0.8em;

  &.selected {
    background-color: blue;
  }
`;

export const StyledForm = styled.form`
  padding: 2rem;
`;
export const FormHeading = styled(Typography)`
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
`;
export const SubHeading = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const FlexDiv = styled(Box)`
  display: flex;
  margin-bottom: 1rem;
`;

export const FormDiv = styled(Box)`
  border: 1px solid lightgray;
  width: 60%;
  margin: auto;
`;

export const StyledInputLabel = styled(Typography)``;

export const StyledInputTask = styled.input`
  flex: 1;
  padding-left: 0.5rem;
  height: 2.5rem;
  border: 1px solid ${COLORS.GREY_400};
  border-radius: 4px;
  width: 100%;
`;

export const TableContainer = styled.div`
  margin: 1rem 0rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #dddddd;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 15px;
  border: 1px solid #dddddd;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  font-size: 1em;
  background-color: white;
  color: black;
  border: 1px solid black;
`;
export const ButtonStyle = styled(Button)`
  margin-top: 1rem;
  padding: 0.3rem;
  font-size: 1em;
  max-height: 2rem;
  background-color: ${COLORS.BLUE_200};
`;
