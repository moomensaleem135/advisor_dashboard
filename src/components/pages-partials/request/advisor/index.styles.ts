import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Button, FormControlLabel, Tab, TableCell, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
export const GenericBox = styled(Box)`
  margin-top: 20px;
  border: 1px solid ${COLORS.GREY_400};
  box-sizing: border-box;
  border-radius: 4px;
`;
export const TableBoxContainer = styled(Box)``;
export const CustomTableHead = styled(TableCell)`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const CustomSignButton = styled(Button)`
  border-radius: 9px;
  color: white;
  font-size: 17px;
  font-weight: 700;
  color: white;
  background: ${COLORS.BLUE_600};
  text-align: end;
  &:hover {
    background: ${COLORS.BLUE_600};
  }
`;
