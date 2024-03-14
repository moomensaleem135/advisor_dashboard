import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Tab, Tabs, Typography } from '@mui/material';
export const ReportMainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  height: 89vh;
  margin-bottom: 70px;
`;
export const ReportSubBox = styled(Box)`
  width: 75%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const MainHeading = styled(Typography)`
  font-family: 'Inter' !important;
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const MainDescription = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const ReportMainBoxRadius = styled(Box)`
  width: 100%;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLORS.GREY_400};
  background-color: ${COLORS.GREY_WHITE};
  margin-bottom: 50px;
`;
export const ReportBoxDivider = styled(Box)`
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
export const ReportMonthDetail = styled.div`
  display: flex;
  justify-content: space-between;

  & > div > p:first-child {
    display: inline-block;
    border-bottom: 2px solid ${COLORS.BLUE_600};
    font-size: 22px;
    font-weight: 600;
    color: ${COLORS.BLUE_600};
  }

  & > div > p:not(:first-child) {
    font-size: 15px;
    font-weight: 500;
    margin: 15px 0;
    cursor: pointer;
    &:hover {
      font-size: 15px;
      font-weight: 800;
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
  & > div:nth-child(2) > p:first-child {
    display: inline-block;
    border-bottom: 2px solid ${COLORS.BLUE_600};
    font-size: 22px;
    font-weight: 600;
    color: ${COLORS.BLUE_600};
  }
  & > div:nth-child(2) > div > details {
    font-size: 15px;
    font-weight: 500;
    margin: 15px 0;
    cursor: pointer;
  }
  & > div:nth-child(2) > div > details > ul > li {
    list-style-type: none;
  }
  & > div:nth-child(2) > div > details > summary {
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      font-weight: 800;
    }
  }
  & > div:nth-child(2) > div > details > summary::marker {
    color: ${COLORS.BLUE_600};
  }

  & > div:nth-child(2) > div > details > ul > li {
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      font-weight: 800;
    }
  }
`;
