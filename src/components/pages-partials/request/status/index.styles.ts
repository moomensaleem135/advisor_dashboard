import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Button, FormControlLabel, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
export const RequestMainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  height: 89vh;
  margin-bottom: 70px;
`;
export const RequestSubBox = styled(Box)`
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const RequestMainHeading = styled(Typography)`
  font-family: 'Inter' !important;
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const RequestMainDescription = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const RequestMainBoxRadius = styled(Box)`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLORS.GREY_400};
  background-color: ${COLORS.GREY_WHITE};
  margin-bottom: 50px;
`;
export const RequestBoxDivider = styled(Box)`
  border-bottom: 1;
  border-color: 'divider';
`;
export const CustomTabs = styled(Tabs)`
  border-bottom: 1px solid ${COLORS.GREY_400};
  & .Mui-selected {
    font-size: 20px;
    font-weight: 800;
    color: white !important;
    background: ${COLORS.BLUE_600};
    border-radius: 10px 10px 0 0;
  }
`;
export const CustomTab = styled(Tab)`
  &.MuiTab-root:not(.Mui-selected) {
    font-size: 20px;
    font-weight: 500;
    color: black;
    background: ${COLORS.GREY_20};
    border-radius: 10px 10px 0 0;
    border: none;
  }

  &.MuiTab-root {
    margin-right: 20px;
    text-transform: none;
  }
`;
export const AllRequestPara = styled(Typography)`
  font-size: '17px';
  font-weight: 800;
  color: ${COLORS.BLUE_600};
  margin-bottom: 10px;
  margin-left: -10px;
`;
export const GridMainHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const SecondGridMainHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
`;
export const SecondGridMainBox = styled(Box)`
  font-size: 22px;
  font-weight: 700;
  border: 1px solid ${COLORS.GREY_400};
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  .jodit-container .jodit-workplace {
    min-height: 500px;
    height: 200px !important;
  }
  a.jodit-status-bar-link {
    display: none;
  }
  label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-1qzgtcq-MuiFormControlLabel-root {
    border: none;
  }
  label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-1qzgtcq-MuiFormControlLabel-root {
    padding: 0;
    margin: 20px 0;
  }
  @media (max-width: 1400px) {
    label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-1qzgtcq-MuiFormControlLabel-root {
      padding: 0;
      margin: 25px 0;
    }
  }
  @media (min-width: 1600px) and (max-width: 1620px) {
    label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-1qzgtcq-MuiFormControlLabel-root {
      padding: 0;
      margin: 35px 0;
    }
  }
`;

export const SubjectHeading = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
`;

export const RequestInputBox = styled.input`
  border: 1px solid ${COLORS.GREY_400};
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
  outline: none;
`;

export const RadioButtonHeading = styled(Typography)`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const RadioButtonSubHeading = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.GREY_400};
  margin-bottom: 10px;
  font-style: italic;
`;
export const SecondGridGenericBox = styled(Box)`
  margin-top: 20px;
  border: 1px solid ${COLORS.GREY_400};
  box-sizing: border-box;
  border-radius: 4px;
  textarea {
    min-height: 70px;
    border: 1px solid ${COLORS.GREY_400};
  }
`;
export const RequestSearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding-bottom: 10px;
  outline: none;
  padding-left: 30px;
`;
export const InputBox = styled(Box)`
  position: relative;
  border-bottom: 1px solid ${COLORS.GREY_400};
`;

export const InputImage = styled(Image)`
  position: absolute;
  height: 12px;
  width: 13px;
  top: 12px;
  left: 10px;
`;
export const CalenderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const DueDateTypography = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
`;
export const ReportButtonBox = styled(Typography)`
  display: flex;
  justify-content: end;
`;

export const ReportCustomButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${COLORS.BLUE_600};
  font-size: 17px;
  font-weight: 700;
  border-radius: 9px;
  margin-bottom: 20px;
`;
export const RequestHeadRow = styled(Button)`
  padding: 0 10px;
  display: flex;
  gap: 175px;
  @media (max-width: 1340px) {
    gap: 150px;
  }
`;
export const ReportFormControlLabel = styled(FormControlLabel)`
  &.Mui-checked {
    color: ${COLORS.BLUE_600};
  }
`;
export const CheckBoxTypography = styled(Typography)`
  font-size: 12px;
  font-weight: 500;
  color: #424242;
`;

export const CheckBoxTableRow = styled(Box)`
  padding: 0px 10px;
  border: 1px solid ${COLORS.GREY_400};
  border-radius: 4px;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 150px;
  align-items: center;
  margin: 10px 0;
`;

export const CheckBoxTypographyRow = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
`;
export const CheckBoxTableInnerRow = styled(Box)`
  padding: 0px 0px;
  border: 1px solid ${COLORS.GREY_400};
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 150px;
  align-items: center;
  margin: 10px 0;
  & td {
    min-width: 217px;
    border: 1px solid red;
  }
`;

export const EmailTypography = styled(Box)`
  color: ${COLORS.BLUE_600};
  text-decoration: underline;
  text-decoration-line: ${COLORS.BLUE_600};
  cursor: pointer;
`;

export const CustomDateInput = styled.input`
  /* opacity: 0; */
  border: 1px solid red;
`;
export const StatusSecondGridMainBox = styled(Box)`
  font-size: 22px;
  font-weight: 700;
  border: 1px solid ${COLORS.GREY_400};
  padding: 10px;
  margin-top: 32px;
  border-radius: 4px;
`;
export const RequestStatusHeadRow = styled(Box)`
  display: flex;
  /* justify-content: space-between; */
  padding: 0 10px;
`;
export const PendingReviewBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
export const PendingTypography = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  margin-top: 12px;
`;
export const SendingButton = styled(Button)`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  & > div > p {
    font-size: 15px;
    font-weight: 600;
    color: ${COLORS.BLUE_600};
  }
  & > div > div > img {
    margin-top: 10px;
  }
`;

export const SelectTypography = styled(Typography)`
  text-align: start;
  margin-top: -15px;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.GREY_800};
  font-style: italic;
`;

export const StatusEmployeeMainBox = styled(Box)`
  padding: 10px;
  border: 1px solid ${COLORS.GREY_400};
  display: flex;
  .reportgreen {
    background: ${COLORS.GREEN_200};
    color: ${COLORS.GREEN_800};
  }
  .reportred {
    background: ${COLORS.RED_200};
    color: ${COLORS.RED_800};
  }
  .reportGrey {
    color: ${COLORS.GREY_800};
    background-color: ${COLORS.GREY_400};
  }
  span {
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const CustomStatusEmailTypography = styled(Box)`
  color: ${COLORS.BLUE_600};
  text-decoration: underline;
  text-decoration-line: ${COLORS.BLUE_600};
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
`;

export const NameCustomBox = styled(Box)`
  margin-bottom: 20px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  label {
    font-size: 17px;
    font-weight: 400;
    color: #424242;
    padding: 5px;
  }
  input {
    width: 100%;
    border: 1px solid ${COLORS.GREY_400};
    border-radius: 4px;
    outline: none;
  }
`;

export const AddNotesTypography = styled(Box)`
  font-size: 15px;
  font-weight: 600;
  color: ${COLORS.GREY_800};
  padding: 5px;
`;

export const ApprovedRequestTypography = styled(Box)`
  font-size: 17px;
  font-weight: 800;
  color: ${COLORS.GREY_800};
  /* padding: 00px 10px; */
  padding-bottom: 10px;
`;

//policy

export const StyledPolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 4px;
`;

export const StyledPolicyItem = styled.div`
  margin: 0 12px;
  border: 1px solid #a5adb6;
  border-radius: 4px;
`;

export const StyledPolicyContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  align-items: center;
`;

export const StyledPreviewContainer = styled.div`
  cursor: pointer;
  margin: 0 12px;
`;

export const StyledPreview = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #4f9ef8;
`;

export const StyledDropDownList = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #4f9ef8;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  margin: 0 12px;
  border: 1px solid #a5adb6;
  border-radius: 4px;
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
export const StyledImageTextContainerRequest = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
export const StyledImageTextRequestStatus = styled.div`
  text-decoration: underline;
  color: #0977ec;
  display: flex;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
`;
export const GridMainHeadingDescription = styled(Typography)`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  color: ${COLORS.GREY_800};
`;
export const SendEmailTypography = styled(Typography)`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
`;
export const SendEmailDescriptionTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

export const CustomEmailRemindarButton = styled(Button)`
  background-color: #3a6fb6;
  border-radius: 9px;
  color: #ffffff;
  height: 46px;
  font-size: 17px;
  font-weight: 700;
  margin-right: 35px;
  margin-bottom: 15px;
  cursor: pointer;

  :hover {
    background-color: #3a6fb6;
  }
`;

export const CustomModalOneBox = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;
export const CustomModalGenericBox = styled(Button)`
  border: 1px solid ${COLORS.GREY_400};
  padding: 10px;
  text-align: start;
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const RemoveRadioButtonBorder = styled(Box)`
  label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-118tjk8-MuiFormControlLabel-root {
    border: none;
  }
  label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-378c0s-MuiFormControlLabel-root {
    margin: 0;
  }
  ,
  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv {
    color: inherit !important;
  }
`;

export const CustomCurrentlyTypography = styled(Typography)`
  font-weight: 600;
`;

export const CustomSaveButton = styled(Button)`
  font-weight: 500;
  background: ${COLORS.BLUE_600};
  border-radius: 4px;
  color: white;
`;
export const CustomPreviewButton = styled(Button)`
  font-weight: 500;
  background: ${COLORS.BLUE_600};
  border-radius: 4px;
  color: white;
  margin-top: 15px;
`;

export const CustomEmailHistoryTypography = styled(Typography)`
  font-weight: 500;
`;
export const CustomBoxHover = styled(Typography)`
  &:hover {
    background: ${COLORS.GREY_200};
  }
`;
export const CustomModalNameTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 700;
`;
export const CustomEmailModalTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: ${COLORS.BLUE_800};
  color: ${COLORS.BLUE_800};
`;
export const CustomAprroveSignatureTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
`;
export const SignatureTypography = styled(Typography)`
  font-size: 17px;
  font-weight: 600;
  margin-top: 5px;
`;
export const DialogueBox = styled(Box)`
  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-1t0pcae {
    width: 900px;
  }
  .MuiDialogContent-root.MuiDialogContent-dividers.css-x88jnw {
    border: navajowhite;
  }
`;
