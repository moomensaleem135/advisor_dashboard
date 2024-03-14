// import { COLORS } from "../../../constants/colors";
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Link from 'next/link';

import Button from '@/components/core/Button';

export const HomeFluidContainer = styled.div`
  height: 89%;
  padding: 20px 40px 20px 40px;
  display: flex;
  justify-content: center;
`;

export const BoxStyling = styled(Box)`
  span.MuiTabs-indicator.css-mlr2dw {
    display: none !important;
  }
`;

export const HomeContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  height: 100%;
  column-gap: 16px;
`;

export const LeftSection = styled.div`
  width: 60%;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
  height: 100%;
`;

export const CalenderWrapper = styled.div`
  height: 50%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: white;
  border-radius: 6px;
  position: relative;
  box-shadow: 0px 0px 6px 2px #00224726;
`;

export const ListHeading = styled.div`
  /* padding-left: 14px;
  padding-top: 10px; */
  font-weight: 500;
  font-size: 22px;
`;

export const CalendarStyles = styled.div`
  position: relative !important;
  border: 1px solid #c3cad2;
  border-radius: 6px;

  .fc-day {
    color: #a5adb6;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    margin: 8px;
    text-transform: uppercase;
    cursor: pointer;
  }

  /* Added these section of code for making calendar view responsive */
  & > div {
    height: 100%;
  }

  .fc .fc-scrollgrid-liquid {
    height: 360px;
    border: none;
  }

  .fc-toolbar-chunk > div {
    display: flex !important;
    align-items: center !important;
    flex: 1 !important;
    justify-content: space-between;
  }

  .fc-toolbar-chunk > button {
    color: #5c6670 !important;
  }

  .fc-toolbar > div {
    display: flex;
    flex: 0.4 !important;

    @media (max-width: 1450px) {
      padding: 0 !important;
    }
  }

  .fc-toolbar-chunk h2 {
    font-size: 17px !important;
    font-weight: 400 !important;

    @media (max-width: 1550px) {
      font-size: 14px !important;
    }
  }

  .fc-view {
    width: 100%;
    background-color: white;
    height: 100%;
  }
  /* */

  .fc-toolbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
  }

  .fc-h-event,
  .fc-v-event {
    background-color: #4f9ef8;
    border: 1px solid #4f9ef8;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: #c5dffc;

    color: #2e3338;
  }

  .fc-daygrid-day-number {
    color: #2e3338;
  }

  .fc-event.past-event {
    background-color: #f25858;
    border-color: red;
    color: transparent;
    font-size: 0;
    border-radius: 50%;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    display: inline-block;
    cursor: pointer;
  }

  .fc-event.coming-event {
    background-color: #4f9ef8;
    border-color: #4f9ef8;
    color: transparent;
    font-size: 0;
    border-radius: 50%;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    display: inline-block;
    cursor: pointer;
  }

  .fc-daygrid-block-event .fc-event-title {
    display: none;
  }

  .fc .fc-daygrid-day-events {
    margin: 0;
  }

  .fc .fc-button,
  .fc-next-button .fc-button .fc-button-primary {
    background-color: white !important;
    border: none !important;
    font-size: 1em;
    color: #5c6670;
    outline: none;
    padding: 0;
  }

  .fc .fc-button:hover {
    background-color: white !important;
  }

  .fc-toolbar div {
    display: flex;
    align-items: center;
    /* padding: 0 0.5rem; */
    justify-content: center;
    padding: 0 20px;
  }

  .fc-theme-standard td {
    border: 1px solid #f4f5f6;
  }
  .fc-theme-standard th {
    border: transparent;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
  }

  .fc .fc-toolbar.fc-header-toolbar .fc-toolbar-chunk:nth-child(1),
  .fc .fc-toolbar.fc-header-toolbar .fc-toolbar-chunk:nth-child(3) {
    display: none;
  }
`;

export const RequestListContainer = styled.div`
  height: 50%;
  padding: 10px 20px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 6px 2px #00224726;
`;

export const RequestListWrapper = styled.div`
  border: 1px solid #c3cad2;
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  position: relative;
`;

export const RequestLists = styled.div`
  padding: 10px 20px;
  border-radius: 6px;
  flex: 0 0 48%;
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* row-gap: 16px; */
  height: fit-content;
  overflow-y: auto;
  box-shadow: 0px 0px 6px 2px #00224726;
  background-color: #c5dffc;
`;

export const ReviewCardContainer = styled.div`
  padding: 0px 3px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin: 0.8rem 0;
`;

export const DateHeading = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 12px 16px 8px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 17px;
  text-transform: uppercase;
`;

export const ButtonStyles = styled(Button)`
  background-color: #3a6fb6;
  border-radius: 9px;
  height: 46px;
  font-size: 17px;
  font-weight: 500;
`;

export const NoReviews = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 6px;
  width: 100%;
  padding-top: 20px;
`;

export const StyledStatusOverdue = styled.div`
  color: red;
`;

export const StyledStatusProgress = styled.div`
  color: green;
`;

export const StyledStatusDue = styled.div`
  color: blue;
`;

export const StyleRequestHeading = styled.div`
  font-size: 22px;
  font-weight: 500;
`;
export const TopAlertBox = styled(Box)`
  background-color: #ffebeb;
  border-left: 3px solid #c72222;
  /* width: 75%; */
  height: 60px;
  display: flex;
  align-items: center;
`;
export const AlertButton = styled(Button)`
  height: 36px;
  padding: 8px, 12px, 8px, 12px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  background-color: #fcfdff;
  color: #c72222;
  border: 1px solid #c72222;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AlertText = styled('span')`
  font-weight: 600;
`;
export const CloseButton = styled(Box)`
  cursor: pointer;
`;
export const AlertBtnBox = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #c72222;
`;
export const StyledAlertMain = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  padding: 0 2.3rem;
`;
export const StyledAlertBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  border-left: 5px solid red;
  padding: 0.5rem 1rem;
  background-color: #ffebeb;
`;
export const AlertTextBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;
