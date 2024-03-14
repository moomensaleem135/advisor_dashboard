import styled from '@emotion/styled';
import { TextField, Grid, Typography, Button, Box } from '@mui/material';

import { COLORS } from '../../../constants/colors';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Container = styled(Box)`
  background-color: ${COLORS.WHITE_100};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const StyledGridLeft = styled(Grid)`
  position: relative;
  & > * {
    filter: brightness(40%);
  }
  & > *:last-child {
    filter: none;
  }
`;

export const StyledGridRight = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
  border: 1px solid #cfcfcf;
  width: 100%;
  max-height: 35rem;
  max-width: 35rem;

  .login-form {
    width: 100%;
  }
  .css-uscfho-MuiFormHelperText-root.Mui-error {
    color: white !important;
  }

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    color: #151618 !important;
    font-size: 17px !important;
    font-weight: 400 !important;
  }

  .css-zqgnce-MuiFormControl-root-MuiTextField-root.MuiTextField-root > div {
    border-radius: 8px !important;
  }
`;

export const StyledGridLogo = styled(Grid)`
  position: relative;
  width: 400px;
`;

export const LogoBox = styled.div``;
export const Heading = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 34px;
  line-height: 2;
  color: ${COLORS.BLACK_101};
`;
export const SubHeading = styled.div`
  text-align: center;
  font-weight: 500;
  line-height: 2;
  font-size: 28px;
  color: ${COLORS.BLACK_101};
`;

export const Input = styled(TextField)`
  width: 100%;
  margin: 2rem auto;
  margin-bottom: 0rem !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background: ${COLORS.WHITE_100};
  border-radius: 0.8rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px auto;
  font-style: bold;
  font-weight: 600;
  font-size: 0.9rem;
  justify-content: flex-end;
`;

export const InnerFlex = styled.div`
  display: flex;
  margin-left: -10px;
`;

export const H4 = styled.h4`
  cursor: pointer;
  font-weight: bolder;
  color: ${COLORS.THEME_COLOR};
  text-decoration: underline;
`;

export const DivButton = styled.div`
  margin-top: 40px !important;
  display: flex;
  justify-content: center;

  button {
    padding: 10px 20px;
  }
  @media (max-width: 400px) {
    button {
      padding: 10px 10px;
    }
  }
`;
export const P = styled.p`
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE_100};
  font-size: 12px;
  margin: 0 auto;
  font-weight: bold;
`;
export const SPAN = styled.span`
  color: #8bc152;
  cursor: pointer;
  padding-left: 4px;
  font-weight: bold;
`;

export const StyledTypography = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${COLORS.WHITE_100};
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
`;

export const DivSpace = styled.div`
  margin-block: 1rem;
`;

export const SignInButton = styled(Button)`
  background-color: #3a6fb6;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 9px;
  height: 52px;
  width: 136px;

  :hover {
    background-color: #3a6fb6;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.BLUE_100};
  height: 5vh;
  width: 100%;
`;
export const StyledBackHome = styled('a')`
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #5c6670;
  cursor: pointer;
`;
