import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Button from '@/components/core/Button';

export const Main = styled(Box)`
  margin: auto;
  max-width: 65%;
  padding: 1rem;
  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root {
    color: inherit !important;
  }
  font-family: inter;
`;

export const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 800;
  color: #2e3338;
`;

export const InputDiv = styled(Box)`
  border: 1px solid lightgray;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledTypo = styled(Typography)`
  color: ${COLORS.BLUE_200};
  margin-bottom: 1rem;
`;

export const Title = styled.label`
  display: block;
`;

export const StyledInput = styled.input`
  border: 1px solid lightgray;
  width: 75%;
  padding: 0.7rem 0.5rem;
  font-size: 1em;
  display: inline;
  font-weight: 500;
  font-size: 1em;

  /* Disable the number input spinner */
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0; /* Optional: Remove extra spacing */

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  /* WebKit (Chrome, Safari) */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Edge */
  &[type='number'] {
    -ms-inner-appearance: none;
  }

  /* Firefox, Chrome, Safari, Edge */
  &[type='number'] {
    appearance: textfield;
  }
`;

export const OtpContainer = styled(Box)``;

export const OtpInput = styled.input`
  max-width: 11%;
  gap: 1rem;
  display: inline;
  height: 45px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 16px;
  /* Disable the number input spinner */
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0; /* Optional: Remove extra spacing */

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  /* WebKit (Chrome, Safari) */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Edge */
  &[type='number'] {
    -ms-inner-appearance: none;
  }

  /* Firefox, Chrome, Safari, Edge */
  &[type='number'] {
    appearance: textfield;
  }
`;

export const ButtonStyle = styled(Button)`
  background-color: ${COLORS.BLUE_200};
`;

export const ButtonDiv = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid gray;
  margin: 1rem 0rem 1rem 0rem;
  height: 4rem;
  width: 14rem;
  &.selected {
    background-color: blue;
  }
`;
