import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledTasksFluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
  align-items: center;
  height: auto;
  .css-1cf6vxd-MuiListItem-root {
    padding: 0;
  }
  .css-tlelie-MuiListItemText-root {
    margin: 0 !important;
  }
`;

export const StyledTasksContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

export const StyledHeaderText = styled.div`
  font-size: 38px;
  font-weight: 800;
  color: #2e3338;
`;

export const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 26px;
`;

export const StyledTableColumns = styled.div`
  flex: 1;
`;

export const StyledImageBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledImageTextContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: flex-start;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const StyledImageText = styled.div`
  text-decoration: underline;
  color: #0977ec;
  display: flex;
  align-items: center;
`;

export const StyledImageSize = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

export const StyledPolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 4px;
`;

export const StyledPolicyItem = styled.div`
  margin: 0 12px;
  border: 1px solid #a5adb6;
  border-radius: 4px;
`;

export const StyledPolicyContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  align-items: center;
`;

export const StyledPreviewContainer = styled.div`
  cursor: pointer;
  margin: 0 12px;
`;

export const StyledPreview = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #4f9ef8;
`;

export const StyledDropDownList = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #4f9ef8;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  margin: 0 12px;
  border: 1px solid #a5adb6;
  border-radius: 4px;
`;

export const StyledButton = styled(Button)`
  background-color: #3a6fb6;
  border-radius: 9px;
  color: #ffffff;
  height: 46px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #3a6fb6;
  }
`;
