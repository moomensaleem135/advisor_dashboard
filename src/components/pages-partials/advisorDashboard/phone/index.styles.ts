import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Button from '@/components/core/Button';

export const Container = styled(Box)`
  padding: 3rem 3rem;
  border: 1px solid lightgray;
`;

export const Title = styled.label`
  display: block;
  font-size: 0.8em;
`;

export const StyledInput = styled.input`
  border: 1px solid lightgray;
  width: 70%;
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

export const StyledButton = styled(Button)`
  padding: 0.5rem;
  font-size: 0.8em;
  width: 100%;
  margin: auto;
  background-color: ${COLORS.BLUE_200};
`;
