import { Box, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import {
  Details,
  Frame,
  FrameBox,
  LowerContainer,
  Main,
  Name,
  Print,
  Schedule,
  ScheduleStatus,
  StyledButton,
  StyledToolTip,
  SubTitle,
  Title,
  TopDiv,
  Typography1,
  Typography2,
  UpperContainer
} from './index.styles';
interface TooltipContentProps {
  title: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  currentEventNumber: number;
  totalEvents: number;
}

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'white',
          boxShadow: 'none !important',
          border: 'none !important',
          color: 'black'
        }
      }
    }
  }
});
const mayDate = new Date();
const TooltipContent: React.FC<TooltipContentProps> = ({
  title,
  desc,
  startDate,
  currentEventNumber,
  endDate,
  totalEvents
}) => {
  const currentDate = new Date();
  const eventDate = new Date(startDate);
  const eventEndDate = new Date(endDate);
  const encodedEndDate = encodeURIComponent(eventEndDate.toDateString());
  let scheduleText = '';

  if (eventDate < mayDate) {
    scheduleText = 'OVERDUE';
  } else {
    scheduleText = 'Upcoming';
  }

  return (
    <Box className="fc-event-main">
      <ThemeProvider theme={theme}>
        <StyledToolTip
          title={
            <Box>
              <Main>
                <UpperContainer>
                  <TopDiv>
                    <Typography1>VALUATION &amp; FEES</Typography1>
                    <Typography2>
                      <ScheduleStatus scheduleText={scheduleText}>{scheduleText}</ScheduleStatus>
                    </Typography2>
                  </TopDiv>
                  <Title>{title}</Title>
                  <Schedule>{`Scheduled ${currentEventNumber}/${totalEvents}`}</Schedule>
                  <Details>{desc}</Details>
                  <hr />
                </UpperContainer>
                <LowerContainer>
                  <SubTitle>RESOURCES</SubTitle>
                  <FrameBox>
                    <Frame>
                      <Name>CheckList</Name>
                      <Print src="/svgs/Image1.svg" width={100} height={100} alt="" />
                    </Frame>
                    {title === 'Client Billing Review - Quarterly' ? (
                      <Frame>
                        <Name>Billing WorkBook</Name>
                        <Print src="/svgs/Image2.svg" width={100} height={100} alt="" />
                      </Frame>
                    ) : (
                      <Frame>
                        <Name>Archive Review</Name>
                        <Print src="/svgs/CCOR_Checklist.svg" width={100} height={100} alt="" />
                      </Frame>
                    )}
                  </FrameBox>

                  <LinkStyle
                    href={
                      title === 'Client Billing Review - Quarterly'
                        ? '/home/review_form'
                        : '/home/correspondence_form'
                    }
                  >
                    <StyledButton>Begin Review</StyledButton>
                  </LinkStyle>
                </LowerContainer>
              </Main>
            </Box>
          }
          placement="right"
        >
          <div className="fc-event-title">{title}</div>
        </StyledToolTip>
      </ThemeProvider>
    </Box>
  );
};

export default TooltipContent;
