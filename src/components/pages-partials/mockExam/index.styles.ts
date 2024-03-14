import styled from '@emotion/styled';
import { Step } from '@mui/material';

export const StyledMockFluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
  align-items: center;
  height: auto;

  text.MuiStepIcon-text.css-1ab2aci-MuiStepIcon-text {
    font-size: 16px;
  }
`;

export const StyledMockContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const StyledMockHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const StyledMockText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;
  margin-top: -10px;
`;

export const StyledStep = styled(Step)`
  .MuiSvgIcon-root {
    color: ${(props) => props.color || '#FFFFFF'};
  }
  .MuiSvgIcon-root.Mui-active {
    color: ${(props) => props.color || '#FFFFFF'};
  }
  .MuiStepConnector-line {
    position: relative;
    width: 80%;
    margin: auto;
    border: solid 1px;
  }
  .MuiStepConnector-line:after {
    content: '';
    position: absolute;
    top: -4px;
    left: 97%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid black;
    transform: rotate(270deg);
  }
  .css-1ab2aci-MuiStepIcon-text {
    fill: ${(props) =>
      props.color === '#8AB9FF' || props.color === '#D7E5FA' ? 'black' : 'white'};
  }
`;
