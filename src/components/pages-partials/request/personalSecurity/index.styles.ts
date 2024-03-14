import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NameCustomBox1 = styled(Box)`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* column-gap:16px; */
  label {
    font-size: 17px;
    font-weight: 400;
    color: #424242;
    padding: 5px 5px 5px 0px;
  }
  input {
    width: 100%;
    border: 1px solid ${COLORS.GREY_400};
    border-radius: 4px;
    outline: none;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
`;

export const StyledSecurityQuatersBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const StyledSecurityQuaters = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const DataGridContainer = styled.div`
  height: auto;
  width: 100%;
`;
