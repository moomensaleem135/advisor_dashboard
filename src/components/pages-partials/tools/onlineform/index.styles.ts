import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

import Button from '@/components/core/Button';

type StyledSuccessProps = {
  styledSuccess: string;
};

export const Main = styled(Box)`
  padding: 1rem;
  max-width: 80%;
  margin-top: 30px;
  margin: 50px auto;
`;
export const Header = styled(Box)``;
export const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: 800;
`;
export const SubHeading = styled(Typography)`
  margin-top: 7px;
  font-size: 22px;
  font-weight: 500;
  color: ${COLORS.GREY_800};
`;
export const FormDiv = styled(Box)`
  background-color: white;
  padding: 1.25rem;
  margin-top: 2.5rem;
  border: 1px solid ${COLORS.GREY_400};
  hr {
    margin-top: 15px;
  }
`;
export const CustomSheduleDueDateTypography = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  color: rgba(9, 125, 236, 1);
  /* color: #0977ec; */
`;

export const Form = styled.form``;

export const TopDiv = styled(Box)``;
export const SubHeading2 = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  color: ${COLORS.GREY_800};
`;
export const OverViewDiv = styled(Box)`
  margin-top: 1.7rem;
  display: flex;
`;
export const Paragraph = styled(Typography)`
  margin-top: 0.1rem;
  font-weight: normal;
  font-size: 0.8em;
  #overview {
    font-size: 22px;
    font-weight: 600;
  }
  #overviewdetail {
    display: inline-block;
    margin-top: -20px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const SubPara = styled(Typography)`
  margin-top: 1.7rem;
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.GREY_800};
`;

export const CheckDiv = styled(Box)`
  margin-top: 10px;
  display: flex;
  margin-left: 0.6rem;
  justify-content: space-between;
`;
export const CustomLabel = styled(Typography)`
  color: ${COLORS.GREY_1000};
  font-size: 17px;
  font-weight: 400;
  margin-left: 10px;

  /* width: 100px !important; */
`;
export const StyledCheckBox = styled(Checkbox)`
  &.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeSmall.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeSmall.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeSmall {
    align-items: start;
    padding: 0;
  }
  &.Mui-checked {
    color: ${COLORS.BLUE_200};
  }
  :hover {
    background: none;
  }
  height: 1rem;
`;

export const CheckListMainDiv = styled(Box)`
  margin: 1rem 0;
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 0.9em;
    font-family: Inter;
    margin-top: 0.3rem;
  }
`;

export const BottomDiv = styled(Box)`
  margin-top: 20px;
`;

export const Download = styled(Typography)`
  margin-top: 2px;
  text-decoration: underline;
  text-decoration-color: ${COLORS.GREY_800};
  font-size: 17px;
  font-weight: 400;
  color: ${COLORS.GREY_800};
  cursor: pointer;
`;

export const CheckListDiv = styled(Box)`
  display: flex;
  margin: 2rem 0;
  gap: 1rem;
`;
export const CheckTextDiv = styled(Box)``;
export const LabelText = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`;
export const LabelParagraph = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
`;

export const DownloadUpload = styled(Typography)`
  text-decoration: underline;
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  /* padding: 0.1rem; */
  margin: 12px 0;
  color: ${COLORS.GREY_800};
`;

export const ButtonDiv = styled(Box)`
  display: flex;
  justify-content: end;
  gap: 0.7rem;
  align-items: center;
  padding-bottom: 15px;
  margin-top: 10px;
`;

export const StyledButton = styled(Button)`
  font-size: 0.8em;
  padding: 0.5rem;
  background-color: ${COLORS.BLUE_600};
  color: white;
  font-size: 17px;
  font-weight: 400;
  padding: 13px 10px;
  border-radius: 9px;
`;

export const StyledSuccess = styled(Typography)<StyledSuccessProps>`
  font-size: 17px;
  font-weight: 500;

  color: ${(props) =>
    props.styledSuccess === 'Review is Complete' ? `${COLORS.GREEN_400}` : 'red'};
`;

export const SelectedFile = styled(Typography)`
  color: ${COLORS.BLUE_600};
  text-decoration: underline;
  font-size: 0.8em;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${COLORS.GREY_400};
  border-radius: 4px;
  margin-top: 10px;
  min-height: 165px;
  outline: none;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 16px;
    font-weight: 600;
    color: black;
    display: inline-block;
    margin-left: 20px;
  }
`;
