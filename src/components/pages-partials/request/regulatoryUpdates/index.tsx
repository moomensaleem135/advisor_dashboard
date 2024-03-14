import {
  Box,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Divider
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import MultipleSelectPlaceholder from '@/components/core/SelectDropDown/SelectDropDown';
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

export default function RegulatoryUpdates({ content, setContent, title, subTitle }: IRequestProps) {
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
  const names: any = [
    // 'Oliver Hansen',
    // 'Van Henry',
    // 'April Tucker',
    // 'Ralph Hubbard',
    // 'Omar Alexander',
    // 'Carlos Abbott',
    // 'Miriam Wagner',
    // 'Bradley Wilkerson',
    // 'Virginia Andrews',
    // 'Kelly Snyder'
  ];

  return (
    <div>
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubTitle>{subTitle}</HeaderSubTitle>
      </HeaderWrapper>

      <SecondGridMainBox>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 400 }}>
            Select News Update,
            <span style={{ textDecoration: 'underline' }}>Request News Highlight</span> or Add Your
            Own
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Select News Update</span>
            <MultipleSelectPlaceholder
              names={names}
              placeholder="Please Select"
              defaultValue={[]}
            />
            <span style={{ fontSize: 15, fontWeight: 500 }}>Online Form</span>
            <Divider sx={{ margin: '6px 0 16px 0', backgroundColor: '#890606' }} />
          </div>
        </div>
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
