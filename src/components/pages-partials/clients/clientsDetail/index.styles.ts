import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Button from '@/components/core/Button';

export const Main = styled(Box)`
  width: 52rem;
  margin: auto;
  margin-top: 3rem;
`;

export const StyledButton = styled(Button)`
  background-color: #3a6fb6;
  border-radius: 9px;
  color: #ffffff;
  height: 46px;
  margin-left: auto;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #3a6fb6;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 38px;
  font-weight: 800;
  color: #2e3338;
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
