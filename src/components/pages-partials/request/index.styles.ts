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
  font-weight: 500;
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
  span.MuiTabs-indicator.css-mlr2dw {
    display: none !important;
  }
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
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const SecondGridMainHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
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
  font-weight: 500;
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
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #2e3338;
`;
export const RadioButtonSubHeading = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
  color: #2e3338;
  margin-bottom: 10px;
  font-style: italic;
`;
export const SecondGridGenericBox = styled(Box)`
  border: 1px solid ${COLORS.GREY_400};
  box-sizing: border-box;
  border-radius: 4px;
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
  font-weight: 500;
  border-radius: 9px;
  margin-bottom: 20px;

  :hover {
    background-color: ${COLORS.BLUE_600};
  }
`;
export const ReportHeadRow = styled(Button)`
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
  color: ${COLORS.GREY_800};
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
