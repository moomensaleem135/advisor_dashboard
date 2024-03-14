import styled from '@emotion/styled';
import { Box } from '@mui/material';

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

export const Container = styled(Box)`
  width: 50%;
  padding: 3rem 3rem;
  border: 1px solid lightgray;
`;
