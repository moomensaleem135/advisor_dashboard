import { Box } from '@mui/material';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import DatePicker from 'react-datepicker';

import DataGridTable from '@/components/RequestDataGrid/RequestDataGrid';

import {
  CalenderBox,
  DueDateTypography,
  RadioButtonHeading,
  RadioButtonSubHeading,
  ReportButtonBox,
  ReportCustomButton,
  RequestInputBox,
  SecondGridGenericBox,
  SecondGridMainBox,
  SubjectHeading
} from '../index.styles';
import Editor from '../jodit_editor';
import 'react-datepicker/dist/react-datepicker.css';
import { HeaderSubTitle, HeaderTitle, HeaderWrapper } from '../newAdvisor/index.styles';
import { IRequestProps } from '../utils/interface';

const initialRows = [
  { id: 1, name: 'John', email: 'johnsmith@company.com', title: 'CEO' },
  { id: 2, name: 'Rachel Altman', email: 'rachel@company.com', title: 'COO' },
  { id: 3, name: 'Sarah Johnson', email: 'sarah@company.com', title: 'CMO' }
];

const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    cellClassName: () => {
      return 'email-cell';
    }
  },
  { field: 'title', headerName: 'Title', width: 400 }
];

export default function CreateOwnRequestContent({
  content,
  setContent,
  title,
  subTitle,
  checkBoxValue
}: IRequestProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Initialize selected date state
  const [showDatePicker, setShowDatePicker] = useState(false); // State to manage date picker visibility
  const [rows, setRows] = React.useState(initialRows);
  const [subject, setSubject] = useState<string>();

  const toggleDatePicker = () => {
    setShowDatePicker((prevState) => !prevState); // Toggle date picker visibility
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false); // Close the calendar after selecting a date
  };

  return (
    <div>
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubTitle>{subTitle}</HeaderSubTitle>
      </HeaderWrapper>
      <SecondGridMainBox>
        <SubjectHeading>Subject</SubjectHeading>
        <Box>
          <RequestInputBox
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </Box>

        <Editor content={content} setContent={setContent} />
      </SecondGridMainBox>
      <SecondGridMainBox>
        <RadioButtonHeading>Assign Employees</RadioButtonHeading>
        <RadioButtonSubHeading>
          Marked people will receive an email notification
        </RadioButtonSubHeading>
        <DataGridTable rows={rows} columns={columns} />

        <SecondGridGenericBox>
          <CalenderBox>
            <DueDateTypography>
              {selectedDate ? selectedDate.toLocaleDateString() : 'Due Date'}
            </DueDateTypography>
            <Box onClick={toggleDatePicker}>
              <Image
                src={'/svgs/CalendarIcon.svg'}
                height={20}
                width={20}
                alt="calendar-icon"
                style={{ cursor: 'pointer' }}
              />
            </Box>
          </CalenderBox>
          {showDatePicker && (
            <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
          )}
        </SecondGridGenericBox>

        <ReportButtonBox>
          <ReportCustomButton variant="contained">Send Request</ReportCustomButton>
        </ReportButtonBox>
      </SecondGridMainBox>
    </div>
  );
}
