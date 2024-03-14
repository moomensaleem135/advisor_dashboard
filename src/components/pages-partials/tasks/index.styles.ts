import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledTasksFluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px !important;
  align-items: center;
  height: auto;
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
  padding: 0 26px;
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
  padding: 0 150px;
  /* width: 100%; */
`;

export const StyledMonthDate = styled.div`
  padding: 0 24px;
  color: #2e3338;
  font-size: 15px;
  font-weight: 800;
`;

export const StyledTasksList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-height: 580px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledTasks = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #a5adb6;
  border-radius: 4px;
  padding: 0 16px;
`;

export const StyledLeftSide = styled.div`
  flex: 0.5;
  border-right: 1px solid #a5adb6;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  padding-right: 16px;
`;

export const StyledMiddleSide = styled.div`
  flex: 1;
  border-right: 1px solid #a5adb6;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const StyledRightSide = styled.div`
  padding: 0 16px;
  display: flex;
  column-gap: 10px;
  padding-top: 10px;
  min-width: 23rem;
`;

export const StyledDate = styled.div`
  font-size: 17px;
  font-weight: 400;
  text-align: center;
`;

export const StyledTaskType = styled.div`
  background-color: #a5adb6;
  padding: 4px 8px;
  border-radius: 4px;
  height: 24px;
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 12px;
  font-weight: 500;
`;

export const StyledTaskTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #151618;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const StyledScheduleTask = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #5c6670;
`;

export const StyledTaskDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #151618;
  line-height: 20px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const StyledImageBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #0977ec;
`;

export const StyledImageText = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  text-decoration: underline;
  text-underline-position: under;
`;

export const OverDueChip = styled.div`
  border-radius: 4px;
  padding: 4px;
  background-color: red;
  color: white;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const ProgressChip = styled.div`
  border-radius: 4px;
  padding: 4px;
  background-color: #c5dffc;
  color: #0659b1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  width: auto;
  text-transform: uppercase;
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
