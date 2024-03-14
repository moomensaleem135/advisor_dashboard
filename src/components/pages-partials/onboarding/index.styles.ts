import styled from '@emotion/styled';

export const StyledBoardingFluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
  align-items: center;
  height: auto;
`;

export const StyledBoardingContainer = styled.div`
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
  margin-left: 15px;
`;

export const StyledBox = styled.div`
  display: flex;
  margin: 0 40px;
  column-gap: 30px;
`;

export const BoardingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1;
`;

export const BoardingListBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const BoardingStep = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const StyledVideoWrapper = styled.div`
  flex: 1;
`;

export const BoardingStepsContainer = styled.div<{
  isSelect?: boolean;
}>`
  ${({ isSelect }) =>
    isSelect
      ? `
  background-color: #EDF5FF;
  border: 1px solid #C5DFFC;
  `
      : `
  border: 1px solid #C3CAD2;
`}
  min-height: 50px;
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoardingStepsNumber = styled.div<{
  isSelect?: boolean;
}>`
  ${({ isSelect }) =>
    isSelect
      ? `
      border: 1px solid #4F9EF8;
  `
      : `
      border: 1px solid #a5adb6;
`}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
`;
