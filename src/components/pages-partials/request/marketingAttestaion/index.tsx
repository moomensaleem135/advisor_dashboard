import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
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
import { StyledContainer, StyledQuaterContainer, StyledQuaterWrapper } from './index.styles';

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

export default function MarketingAttestation({
  content,
  setContent,
  title,
  subTitle
}: IRequestProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Initialize selected date state
  const [showDatePicker, setShowDatePicker] = useState(false); // State to manage date picker visibility
  const [selectedValue, setSelectedValue] = useState('');
  const [rows, setRows] = React.useState(initialRows);
  const [subject, setSubject] = useState<string>();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

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
      <StyledQuaterWrapper>
        {/* radio button section */}
        <StyledQuaterContainer>
          <StyledContainer>
            <div>Quater Ending</div>
            <RadioGroup
              sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
              row
              aria-label="options"
              name="options"
              value={selectedValue}
              onChange={handleChange}
            >
              <FormControlLabel
                value="March "
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="March "
              />
              <FormControlLabel
                value="June"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="June"
              />
              <FormControlLabel
                value="September"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="September"
              />
              <FormControlLabel
                value="December"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="December"
              />
            </RadioGroup>
          </StyledContainer>
          <StyledContainer>
            <div style={{ paddingLeft: 20 }}>
              I have submitted all marketing and advertising materials ie., website pages,
              brochures, emails, slide decks and presentations etc. to the CCO for review prior to
              public dissemination.
            </div>
          </StyledContainer>
        </StyledQuaterContainer>
      </StyledQuaterWrapper>
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
