import styled from '@emotion/styled';
import { Box, Step, Typography } from '@mui/material';

import { ButtonStyled } from '@/components/core/Button/Button.styles';

export const Main = styled(Box)`
  padding: 1rem;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
`;
export const Heading = styled(Typography)`
  font-size: 2.1em;
  font-family: inter;
  font-weight: 800;
  text-align: center;
  padding-bottom: 1rem;
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
    border: dashed 1px;
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

export const CenteredDiv = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled(Box)`
  max-width: 13rem;
`;
export const UpperText = styled(Typography)``;
export const LowerText = styled(Typography)`
  margin-top: 1rem;
`;
export const TextDiv = styled(Box)`
  border: 1px solid black;
  padding: 0.5rem;
  background-color: white;
  max-width: 13rem;
`;

export const StyledButton = styled(ButtonStyled)`
  width: 100%;
  border-radius: 0;
  /* background-color: #01012f; */
`;

export const StyledBox = styled(Box)`
  display: flex;
  width: 70%;
  justify-content: center;
  gap: 0.5rem;
  /* margin: 0.3rem 0; */
`;

export const StyledYear = styled(Typography)`
  margin-top: -10px;
`;
