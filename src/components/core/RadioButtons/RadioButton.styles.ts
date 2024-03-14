import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const FormGroupStyles = styled(FormGroup)``;

export const FormControlLabelStyles = styled(FormControlLabel)<{
  formControlStyle?: boolean;
  borderRadius?: boolean;
}>`
  ${({ formControlStyle, borderRadius }) =>
    formControlStyle
      ? `
      border: none;
      margin: 8px 0;
    `
      : `
      border: 1px solid #c3cad2;
      height: 20px;
      padding: 20px 0;
      border-radius: ${borderRadius ? '4px' : '0px'};
`}
  .css-1gw8p6f-MuiTypography-root {
    font-size: 16px;
    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }
`;

export const RadioStyles = styled(Checkbox)`
  padding: 0;
`;
