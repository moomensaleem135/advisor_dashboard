'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import NewTaskForm from '../tools/calendar/form';
import {
  OverDueChip,
  ProgressChip,
  StyledButton,
  StyledDate,
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledImageBox,
  StyledImageContainer,
  StyledImageText,
  StyledLeftSide,
  StyledMiddleSide,
  StyledMonthDate,
  StyledRightSide,
  StyledScheduleTask,
  StyledTableHeader,
  StyledTableWrapper,
  StyledTaskDescription,
  StyledTasks,
  StyledTasksContainer,
  StyledTasksFluidContainer,
  StyledTasksList,
  StyledTaskTitle,
  StyledTaskType
} from './index.styles';

interface Tasks {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string;
  image1: string;
  image2: string;
  start: string;
  scheduled: string;
}

const dummyTasks: Tasks[] = [
  {
    id: '1',
    title: 'Clients Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'in_progress',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/CCOR_Checklist.svg',
    start: '2024-02-09',
    scheduled: '2024-01-08'
  },
  {
    id: '2',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: 'overdue',
    description:
      'Every quarter you’ll need to examine a sampling of your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/workBook.svg',
    start: '2024-02-29',
    scheduled: '2024-01-08'
  },

  {
    id: '3',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'overdue',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/CCOR_Checklist.svg',
    start: '2024-03-09',
    scheduled: '2024-02-08'
  },
  {
    id: '4',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: '',
    description:
      'Every quarter you’ll need to examine a sampling of your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/workBook.svg',
    start: '2024-03-29',
    scheduled: '2024-02-08'
  },
  {
    id: '5',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'overdue',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/CCOR_Checklist.svg',
    start: '2024-04-09',
    scheduled: '2024-03-08'
  },
  {
    id: '6',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: '',
    description:
      'Every quarter you’ll need to examine a sampling of your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/workBook.svg',
    start: '2024-04-29',
    scheduled: '2024-03-08'
  },
  {
    id: '7',
    title: 'Client Correspondence Archive Review',
    type: 'Email, Text, Website & Social Messaging',
    status: 'overdue',
    description:
      'This is a review of your archived client correspondence including email, texting, website and social messaging. Are your policies & procedures being followed?',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/CCOR_Checklist.svg',
    start: '2024-05-09',
    scheduled: '2024-04-08'
  },
  {
    id: '8',
    title: 'Client Billing Review - Quarterly',
    type: 'Valuation & Fees',
    status: '',
    description:
      'Every quarter you’ll need to examine a sampling of your client’s billing activity. The goal of this review is to ensure your client’s bills are accurate and match the fee schedule set forth in their advisory agreement and form ADV 2A.',
    image1: '/svgs/Checklist.svg',
    image2: '/svgs/workBook.svg',
    start: '2024-05-29',
    scheduled: '2024-04-08'
  }
];

export default function Tasks() {
  const [uniqueMonths, setUniqueMonths] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  // const handleFormSubmit = (formData: any) => {
  //   const newEvent = {
  //     title: formData.title,
  //     desc: formData.desc,
  //     start: formData.startDate,
  //     end: formData.endDate,
  //     allDay: true,
  //     id: new Date().getTime()
  //   };
  //   setAllEvents((prevEvents) => [...prevEvents, newEvent]);
  //   setCurrentEventNumber((prevNumber) => prevNumber + 1);
  //   setTotalEvents((prevTotal) => prevTotal + 1);
  // };
  const downloadImage = (src: string, alt: string) => {
    // const link = document.createElement('a');
    // link.href = src;
    // // Derive filename from URL
    // const urlParts = src.split('/');
    // const filename = urlParts[urlParts.length - 1];
    // link.download = filename;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100; // Get last two digits of the year

    return `${day}/${month}/${year}`;
  };

  // Function to extract unique months and years
  useEffect(() => {
    const months: string[] = [];
    dummyTasks.forEach((task) => {
      const monthYear = task.start.slice(0, 7); // Extract YYYY-MM
      if (!months.includes(monthYear)) {
        months.push(monthYear);
      }
    });
    setUniqueMonths(months);
  }, []);

  return (
    <StyledTasksFluidContainer>
      <StyledTasksContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>Tasks</StyledHeaderText>
          <StyledButton onClick={handleOpenForm}>Create New Task</StyledButton>
        </StyledHeaderWrapper>
        <StyledTableWrapper>
          <StyledTableHeader>
            <div style={{ paddingLeft: '5px' }}>Due Date</div>
            <div style={{ paddingRight: '20px' }}>Tasks</div>
            <div style={{ paddingRight: '40px' }}>Resources</div>
          </StyledTableHeader>
          {uniqueMonths.map((monthYear) => (
            <div key={monthYear}>
              <StyledMonthDate>
                {new Date(monthYear).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric'
                })}
              </StyledMonthDate>
              <StyledTasksList>
                {dummyTasks
                  .filter((task) => task.start.startsWith(monthYear))
                  .map((task) => (
                    <StyledTasks key={task.id}>
                      <StyledLeftSide>
                        {/* {task.status === 'overdue' ? (
                          <OverDueChip>OVERDUE</OverDueChip>
                        ) : (
                          task.status === 'in_progress' && <ProgressChip>In Progress</ProgressChip>
                        )} */}
                        <StyledDate>{formatDate(task.start)}</StyledDate>
                      </StyledLeftSide>
                      <StyledMiddleSide>
                        <StyledTaskType>{task.type}</StyledTaskType>
                        <StyledTaskTitle>
                          {task.title}
                          <StyledScheduleTask>
                            Scheduled {formatDate(task.scheduled)}
                          </StyledScheduleTask>
                        </StyledTaskTitle>
                        <StyledTaskDescription>{task.description}</StyledTaskDescription>
                      </StyledMiddleSide>
                      <StyledRightSide>
                        <StyledImageContainer>
                          <StyledImageBox
                            onClick={() =>
                              downloadImage(task.image1, task.image1.split('/').pop() || 'Image 1')
                            }
                          >
                            <StyledImageText>
                              {task.image1.split('/').pop() || 'Image 1'}{' '}
                              <Image
                                src={'/svgs/download.svg'}
                                width={20}
                                height={20}
                                alt="download"
                              />
                            </StyledImageText>
                          </StyledImageBox>
                          <Image src={task.image1} width={120} height={120} alt="Image 1" />
                        </StyledImageContainer>
                        <StyledImageContainer>
                          <StyledImageBox
                            onClick={() =>
                              downloadImage(task.image2, task.image2.split('/').pop() || 'Image 2')
                            }
                          >
                            <StyledImageText>
                              {task.title === 'Client Billing Review - Quarterly'
                                ? 'Billing_Workbook.svg'
                                : 'Archive_Review.svg'}
                              {/* {task.image2.split('/').pop() || 'Image 2'}{' '} */}
                              <Image
                                src={'/svgs/download.svg'}
                                width={20}
                                height={20}
                                alt="download"
                              />
                            </StyledImageText>
                          </StyledImageBox>
                          <Image src={task.image2} width={120} height={120} alt="Image 1" />
                        </StyledImageContainer>
                      </StyledRightSide>
                    </StyledTasks>
                  ))}
              </StyledTasksList>
            </div>
          ))}
        </StyledTableWrapper>
      </StyledTasksContainer>
      <NewTaskForm
        title="task"
        open={isFormOpen}
        onClose={handleCloseForm}
        // onFormSubmit={handleFormSubmit}
      />
    </StyledTasksFluidContainer>
  );
}
