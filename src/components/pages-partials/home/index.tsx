'use client';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAuthDataSelector } from '@/store/auth';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Alert, AlertTitle, Avatar, Button, Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import RowRadioButtonsGroup from '@/components/core/RadioButtons/RadioButton';
import ReviewCard from '@/components/reviewCard';
import { LinkStyle } from '@/components/reviewCard/index.styles';

import NewTaskForm from '../tools/calendar/form';
import {
  ButtonStyles,
  CalendarStyles,
  CalenderWrapper,
  HomeContainer,
  HomeFluidContainer,
  LeftSection,
  ListHeading,
  RequestListWrapper,
  RequestListContainer,
  RequestLists,
  RightSection,
  DateHeading,
  NoReviews,
  StyledStatusWrapper,
  StyledStatusOverdue,
  StyledStatusProgress,
  StyledStatusDue,
  ReviewCardContainer,
  StyleRequestHeading,
  TopAlertBox,
  AlertButton,
  AlertText,
  CloseButton,
  AlertBtnBox,
  StyledLink,
  StyledAlertMain,
  StyledAlertBox,
  AlertTextBox,
  BoxStyling
} from './index.styles';

export interface Review {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string;
  image1: ReactNode;
  image2: ReactNode;
  start: string;
}

const options = [
  { value: 'Create Own Request', label: 'Create Own Request' },
  { value: 'New Advisor Onboarding', label: 'New Advisor Onboarding' },
  { value: 'Personal Security Report', label: 'Personal Security Report' },
  { value: 'Regulatory / News Update', label: 'Regulatory / News Update' },
  { value: 'Policies Attestation', label: 'Policies Attestation' },
  { value: 'Meeting Attestation', label: 'Meeting Attestation' },
  { value: 'ADV 2B Review', label: 'ADV 2B Review' },
  { value: 'Training', label: 'Training' },
  { value: 'Advertising / Marketing Attestation', label: 'Advertising / Marketing Attestation' },
  { value: 'Best Execution', label: 'Best Execution' },
  {
    value: 'Social Media / Off Channel Attestation',
    label: 'Social Media / Off Channel Attestation'
  }
];

const dummyReviews: Review[] = [
  {
    id: '1',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'OVERDUE',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/CCOR_Checklist.svg" width={114} height={102} alt="img" />,
    start: '2024-02-09'
  },

  {
    id: '2',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'Upcoming',
    description:
      'Every quarter you’ll need to examine your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/workBook.svg" width={146} height={111} alt="img" />,
    start: '2024-02-29'
  },
  {
    id: '3',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'Upcoming',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/CCOR_Checklist.svg" width={114} height={102} alt="img" />,
    start: '2024-03-09'
  },

  {
    id: '4',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'Upcoming',
    description:
      'Every quarter you’ll need to examine your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/workBook.svg" width={146} height={111} alt="img" />,
    start: '2024-03-29'
  },
  {
    id: '5',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'Upcoming',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/CCOR_Checklist.svg" width={114} height={102} alt="img" />,
    start: '2024-04-09'
  },

  {
    id: '6',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'Upcoming',
    description:
      'Every quarter you’ll need to examine your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/workBook.svg" width={146} height={111} alt="img" />,
    start: '2024-04-29'
  },
  {
    id: '7',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'Upcoming',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/CCOR_Checklist.svg" width={114} height={102} alt="img" />,
    start: '2024-05-09'
  },

  {
    id: '8',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'Upcoming',
    description:
      'Every quarter you’ll need to examine your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/workBook.svg" width={146} height={111} alt="img" />,
    start: '2024-05-29'
  },
  {
    id: '9',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'Upcoming',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/CCOR_Checklist.svg" width={114} height={102} alt="img" />,
    start: '2024-06-09'
  },

  {
    id: '10',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'Upcoming',
    description:
      'Every quarter you’ll need to examine your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: <Image src="/svgs/Checklist.svg" width={114} height={102} alt="img" />,
    image2: <Image src="/svgs/workBook.svg" width={146} height={111} alt="img" />,
    start: '2024-06-29'
  }
];

type TaskListProps = {
  tasks: Review[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState<Review | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const openModal = (task: Review) => {
    setSelectedTask(task);
    setSelectedTaskId(task.id);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setSelectedTaskId(null);
  };

  return (
    <div className="task-list">
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 16px',
          color: '#5C6670',
          fontSize: 14,
          fontWeight: 500
        }}
      >
        <span className="header-task-name">Task Name</span>
        <span className="header-due-date">Due Date</span>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          const [year, month, day] = task.start.split('-').map(Number);
          const formattedDate = `${month}/${day}`;

          return (
            <React.Fragment key={task.id}>
              <div
                className="task"
                key={task.id}
                style={{
                  border: '2px solid black',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  margin: '0 10px 10px 10px',
                  fontSize: '17px',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
                onClick={() => openModal(task)}
              >
                <span className="task-title">{task.title}</span>
                <span className="task-date">{formattedDate}</span>
              </div>
              {selectedTaskId === task.id && selectedTask && (
                <Modal
                  open={true}
                  onClose={closeModal}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div style={{ width: '40%', margin: 'auto' }}>
                    <ReviewCard
                      key={selectedTask.id}
                      title={selectedTask.title}
                      type={selectedTask.type}
                      status={selectedTask.status}
                      description={selectedTask.description}
                      image1={selectedTask.image1}
                      image2={selectedTask.image2}
                    />
                  </div>
                </Modal>
              )}
            </React.Fragment>
          );
        })
      ) : (
        <div style={{ textAlign: 'center', padding: 10 }}>No tasks exist for this month.</div>
      )}
    </div>
  );
};
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

interface SetListDate {
  setListDate: (newMonth: string) => void;
}
const CalendarAndTaskListContainer = ({ setListDate }: SetListDate) => {
  const [events, setEvents] = useState<Review[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setEvents(dummyReviews);
  }, []);

  const handleMonthChange = (newMonth: number, newYear: number) => {
    setCurrentMonth(newMonth);

    setListDate(newMonth.toString());
    setCurrentYear(newYear);
  };

  // Filter tasks for the currently selected month and year
  const filteredTasks = events.filter((task) => {
    const taskDate = new Date(task.start);

    return taskDate.getMonth() + 1 === currentMonth && taskDate.getFullYear() === currentYear;
  });

  const changeMonth = (increment: number) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    handleMonthChange(newMonth, newYear);
  };

  return (
    <div>
      <div
        className="month-selector"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 10,
          alignItems: 'center',
          columnGap: 10
        }}
      >
        <ArrowBackIosIcon
          onClick={() => {
            changeMonth(-1);
          }}
          style={{ cursor: 'pointer' }}
        />
        {monthNames[currentMonth - 1]} {currentYear}
        <ArrowForwardIosIcon onClick={() => changeMonth(1)} style={{ cursor: 'pointer' }} />
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default function Home() {
  const [value, setValue] = useState('1');
  const [events, setEvents] = useState<Review[]>(dummyReviews);
  // const defaultSelectedValue = options[0].value === 'Create Own Request' ? true : false;
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [request, setRequest] = useState('Create Own Request');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [listDate, setListDate] = useState(selectedDate);
  const [filteredReviews, setFilteredReviews] = useState(dummyReviews.slice(0, 2));
  const isFirstRender = useRef(true);
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleRadioChange = (item: string) => {
    setRequest(item);
  };

  useEffect(() => {
    setEvents(dummyReviews);
  }, []);
  // const selectedMonth = new Date(selectedDate).getMonth();
  const currentMonth = new Date().getMonth();

  const displayDate = filteredReviews.slice(0, 1).map((review) => review.start);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);

      return;
    }

    let filtered = dummyReviews.filter((review) => review.start === selectedDate);

    if (filtered.length === 0) {
      filtered = dummyReviews.filter(
        (review) =>
          review.start >= selectedDate &&
          new Date(review.start).toLocaleString('en-US', { month: '2-digit' }) ===
            new Date(selectedDate).toLocaleString('en-US', { month: '2-digit' })
      );
    }
    setFilteredReviews(filtered);
  }, [value, selectedDate]);

  useEffect(() => {
    if (value === '2') {
      setFilteredReviews(
        dummyReviews.filter(
          (review) =>
            review.status === 'Upcoming' &&
            new Date(review.start).getMonth() === new Date(listDate).getMonth()
        )
      );
    }
  }, [value]);

  // initialRender.current=false

  const RadioButtonstyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 10,
    boder: '1px solid red'
  };

  return (
    <>
      <StyledAlertMain>
        <StyledAlertBox>
          <AlertTextBox>
            <Image src="/svgs/alertIcon.svg" width={20} height={20} alt="alert" />
            <Typography ml={1} sx={{ flex: 1 }}>
              <AlertText>Welcome to SecureRIA.</AlertText> Getting started? Take a look at the
              onboarding video.
            </Typography>
          </AlertTextBox>
          <AlertBtnBox>
            <AlertButton>
              <StyledLink href="/tools/onboarding">Onboarding video</StyledLink>
            </AlertButton>
            <CloseButton>
              <Image src="/svgs/crossIcon.svg" width={10} height={10} alt="alert" />
            </CloseButton>
          </AlertBtnBox>
        </StyledAlertBox>
        {/* </TopAlertBox> */}
      </StyledAlertMain>

      <HomeFluidContainer>
        <HomeContainer>
          {/* left section */}
          <LeftSection>
            <CalenderWrapper>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <ListHeading>Compliance Calendar</ListHeading>
                {/* <Button> */}
                <span style={{ cursor: 'pointer' }}>
                  <Image
                    src="/svgs/AddTask.svg"
                    height={50}
                    width={50}
                    alt="Add button"
                    onClick={handleOpenForm}
                  />
                </span>
                {/* </Button> */}
              </Box>
              <TabContext value={value}>
                <BoxStyling>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab
                      label="Calendar View"
                      value="1"
                      sx={{
                        color: value === '1' ? '#0977EC !important' : '#5C6670',
                        marginLeft: '-1rem'
                      }}
                    />
                    <Tab
                      label="List View"
                      value="2"
                      sx={{ color: value === '2' ? '#0977EC !important' : '#5C6670' }}
                    />
                  </TabList>
                </BoxStyling>
                <TabPanel value="1" style={{ padding: 0 }}>
                  <CalendarStyles style={{ height: '402px' }}>
                    <FullCalendar
                      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                      initialView="dayGridMonth"
                      initialDate={new Date()}
                      events={events}
                      headerToolbar={{
                        left: '',
                        center: 'prev,title,next',
                        // center: 'title',
                        right: ''
                      }}
                      fixedWeekCount={false}
                      firstDay={1}
                      editable={false}
                      selectable={true}
                      eventClassNames={(arg) => {
                        const eventStartDate = new Date(arg.event.start as Date);
                        const currentDate = new Date();
                        // Set time to midnight to compare dates without time
                        eventStartDate.setHours(0, 0, 0, 0);
                        currentDate.setHours(0, 0, 0, 0);

                        return eventStartDate.getTime() < currentDate.getTime()
                          ? 'past-event'
                          : 'coming-event';
                      }}
                      dateClick={(info) => {
                        setSelectedDate(info.dateStr);
                        // handleDateClick();
                      }}
                      eventClick={(clickInfo) => {
                        // Handle event click here
                        const startDate = clickInfo.event._instance?.range.start;
                        if (startDate) {
                          const clickedDate = new Date(startDate);
                          const formattedDate = clickedDate.toISOString().slice(0, 10);
                          setSelectedDate(formattedDate);
                        }
                      }}
                      dayCellContent={({ date }) => {
                        const today = new Date();
                        const isToday =
                          date.getDate() === today.getDate() &&
                          date.getMonth() === today.getMonth() &&
                          date.getFullYear() === today.getFullYear();

                        return (
                          <div
                            style={{ fontWeight: isToday ? 'bold' : 'normal', cursor: 'pointer' }}
                          >
                            {date.getDate()}
                          </div>
                        );
                      }}
                      datesSet={(arg) => {
                        // Get the start date of the currently visible range
                        const startDate = arg.start;
                        // Do something with the start date
                      }}
                    />
                  </CalendarStyles>
                </TabPanel>
                <TabPanel value="2">
                  <CalendarStyles>
                    <CalendarAndTaskListContainer setListDate={setListDate} />
                  </CalendarStyles>
                  {/* <StyledStatusWrapper>
                    <StyledStatusOverdue>Red - Overdue.</StyledStatusOverdue>
                    <StyledStatusProgress>Green - Complete.</StyledStatusProgress>
                    <StyledStatusDue>Blue - Due Soon</StyledStatusDue>
                  </StyledStatusWrapper> */}
                </TabPanel>
              </TabContext>
            </CalenderWrapper>
            <RequestListContainer>
              <StyleRequestHeading>Create New Advisor Request</StyleRequestHeading>

              <RequestListWrapper>
                <RowRadioButtonsGroup
                  options={options}
                  onChange={handleRadioChange}
                  defaultChecked={true}
                  styles={RadioButtonstyles}
                  borderRadius={false}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0px 20px' }}>
                  <LinkStyle href={`/request?params=${request}`}>
                    <ButtonStyles>Begin Request</ButtonStyles>
                  </LinkStyle>
                </div>
              </RequestListWrapper>
            </RequestListContainer>
          </LeftSection>
          {/* right section */}
          <RightSection>
            <DateHeading>
              DUE{' '}
              {displayDate[0] &&
                new Date(displayDate[0]).toLocaleDateString(undefined, {
                  timeZone: 'UTC',
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                })}
            </DateHeading>
            <ReviewCardContainer>
              {
                // filteredReviews.length > 0
                //   ?
                filteredReviews.map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    title={review.title}
                    type={review.type}
                    status={review.status}
                    description={review.description}
                    image1={review.image1}
                    image2={review.image2}
                  />
                ))
                // : dummyReviews
                //     .filter(
                //       (review) =>
                //         review.start >= selectedDate &&
                //         new Date(review.start).toLocaleString('en-US', { month: '2-digit' }) ===
                //           selectedMonth
                //     )
                //     .slice(0, 2)
                //     .map((review) => (
                //       <ReviewCard
                //         key={review.id}
                //         title={review.title}
                //         type={review.type}
                //         status={review.status}
                //         description={review.description}
                //         image1={review.image1}
                //         image2={review.image2}
                //       />
                //     ))
              }
            </ReviewCardContainer>
          </RightSection>
        </HomeContainer>
      </HomeFluidContainer>
      <NewTaskForm title="task" open={isFormOpen} onClose={handleCloseForm} />
    </>
  );
}
