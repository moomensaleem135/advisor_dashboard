import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Main = styled.div`
  margin-top: 15px;
  border-style: none;
  justify-content: space-between;
  margin-bottom: 12px;
  border-bottom: 1px solid #805ad5;
  padding: 0rem 7rem;
  padding-bottom: 1rem !important;
  border-style: none;
`;

export const CalendarStyles = styled.div`
  position: relative;
  /* height: 84vh; */
  .fc-header-toolbar.fc-toolbar.fc-toolbar-ltr {
    padding-bottom: 15px;
  }
  .fc-scrollgrid-sync-inner {
    text-transform: uppercase;
  }

  .fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
    padding: 8px;
    height: 107px;
  }
  .fc-event-main.MuiBox-root.css-0 {
    cursor: pointer;
    text-align: left;
  }
  .fc-day {
    color: var(--Grey-600, rgba(92, 102, 112, 0.8));
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin: 8px;
  }

  .fc .fc-daygrid-day.fc-day-today {
    background-color: #c5dffc;
    color: #2e3338;
  }

  .fc-daygrid-day-number {
    color: #2e3338;
  }

  span.fc-icon.fc-icon-chevron-right {
    margin-top: -8px;
  }
  span.fc-icon.fc-icon-chevron-left {
    margin-top: -8px;
  }

  .fc-view {
    width: 100%;
    height: 70vh;
    background-color: white;
  }

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
    background-color: #99c3f3;
  }
  .fc-event.past-event {
    background-color: ${COLORS.RED_400};
    border-color: ${COLORS.RED_400};
    color: white; /* You can adjust the text color as needed */
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0;
  }
  .fc .fc-button,
  .fc .fc-icon,
  .fc .fc-prev-button,
  .fc .fc-next-button {
    background-color: transparent !important ;
    border: none;
    font-size: 1.5em;
    color: black;
    box-shadow: none !important;
    outline: none;
  }

  .fc .fc-button:active,
  .fc .fc-icon:active,
  .fc .fc-prev-button:active,
  .fc .fc-next-button:active {
    background-color: transparent;
    border: none !important;
    color: black;
    box-shadow: none !important;
  }

  .fc-scrollgrid-sync-inner {
    border-right: none !important;
    /* border: 1px solid red; */
  }
  .fc-toolbar div {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-family: Inter;
  }

  .fc-toolbar h2 {
    font-size: 2rem;
    font-weight: 1000;
  }

  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:disabled {
    background-color: #9333ea;
  }
`;

export const DragEventDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  position: absolute;
  right: -8px;
  top: 0%;
  left: auto;
`;
export const NewButton = styled.button`
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--Blue-600, #3a6fb6);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: none;
  color: #ffffff;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--Blue-600, #3a6fb6);
  }

  &:focus-visible {
    outline: 2px solid #10b981;
    outline-offset: 2px;
  }
`;
export const Heading = styled.h1`
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
`;
export const EventsDiv = styled.div`
  border-width: 2px;
  padding: 0.25rem;
  margin: 0.5rem;
  width: 100%;
  margin-left: auto;
  text-align: center;
  background-color: white;
`;

export const HoveredEventContainer = styled(Box)`
  border: 1px solid red;
  /* color: black; */
`;
