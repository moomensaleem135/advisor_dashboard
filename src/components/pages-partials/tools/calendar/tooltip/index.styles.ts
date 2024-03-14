import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/core/Button';

interface ScheduleStatusProps {
  scheduleText: string;
}

export const Main = styled(Box)`
  padding: 1rem;
  /* width: 100%; */
  min-width: 18rem;
  border-radius: 5px;
  height: auto;
  box-shadow: 1px 1px 10px grey;
  background-color: white;
`;
export const UpperContainer = styled(Box)``;
export const LowerContainer = styled(Box)``;
export const TopDiv = styled.div`
  display: flex;
`;
export const StyledToolTip = styled(Tooltip)`
  .mui-tooltip-popper {
    background-color: none !important;
    border: 1px solid red;
  }
  /* margin-left: -1rem; */
`;
export const Title = styled(Typography)`
  font-family: Inter;
  margin-top: 1rem;
  font-size: 1.8em;
  font-style: normal;
  font-weight: 700;
`;
export const Schedule = styled(Typography)`
  /* font-family: Inter; */
  font-size: 1.2em;
  color: ${COLORS.GREY_600};
`;

export const Details = styled(Typography)`
  margin: 1rem 0;
  font-family: Inter;
  font-size: 1.3em;
  font-style: normal;
  font-weight: 400;
`;

export const Typography1 = styled(Typography)`
  color: ${COLORS.BLUE_200};
  border: 1px solid ${COLORS.BLUE_200};
  border-radius: 5px;
  padding: 0.2rem;
  align-items: center;
  font-size: 1em;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-weight: 500;
`;
export const Typography2 = styled.div`
  margin-left: auto;
`;
export const ScheduleStatus = styled(Typography)<ScheduleStatusProps>`
  background-color: ${(props) => (props.scheduleText === 'Upcoming' ? '#c5dffc' : 'red')};
  color: ${(props) => (props.scheduleText === 'Upcoming' ? 'black' : 'white')};
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 1em;
  text-align: center;
  font-weight: 500;
`;

export const SubTitle = styled(Typography)`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
export const FrameBox = styled(Box)`
  display: flex;
  gap: 15px;
  /* justify-content: space-between; */
`;
export const Frame = styled(Box)`
  margin-top: 1rem;
`;
export const Name = styled(Typography)`
  font-size: 1.2em;
`;
export const Print = styled(Image)`
  object-fit: cover;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1em;
  background-color: ${COLORS.BLUE_600};
`;
