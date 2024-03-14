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
import { StyledBox } from '../meetingAttestation/index.styles';
import { HeaderSubTitle, HeaderTitle, HeaderWrapper } from '../newAdvisor/index.styles';
import { IRequestProps } from '../utils/interface';
import {
  PoliciesRadioContainer,
  PoliciesRadioGroupWrapper,
  PoliciesRadioHeading,
  PoliciesRadioSection,
  StyledRadioLabel,
  StyledRadioOption
} from './index.styles';

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

interface CustomRadioProps {
  value: string;
  label: string;
}

const options: CustomRadioProps[] = [
  { value: 'Policies', label: 'Policies & Procedures' },
  { value: 'Ethics', label: 'Code of Ethics' },
  { value: 'Cybersecurity', label: 'Cybersecurity' },
  { value: 'RedFlags', label: 'Red Flags Policy' },
  { value: 'Disaster', label: 'Disaster Recovery Plan' },
  { value: 'Social', label: 'Social Media Policy' }
];

export default function PoliciesAttestation({
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
      <StyledBox>
        {/* radio button section */}
        <PoliciesRadioSection>
          <PoliciesRadioContainer>
            <PoliciesRadioHeading>
              Select which Policies to Send to Advisor(s) for Review
            </PoliciesRadioHeading>
            <PoliciesRadioGroupWrapper>
              <RadioGroup
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                  gap: 'calc((100% - 3 * 130px) / 2)'
                }}
                aria-label="options"
                name="options"
                value={selectedValue}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <StyledRadioOption key={option.value}>
                    <StyledRadioLabel>{option.label}</StyledRadioLabel>

                    <FormControlLabel
                      value={option.value}
                      style={{ marginLeft: 0 }}
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#3A6FB6'
                            },
                            color: '#C3CAD2',
                            alignSelf: 'flex-start'
                          }}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CircleIcon />}
                        />
                      }
                      label={
                        <Image src={'/svgs/dummyImage.svg'} width={90} height={110} alt="saving" />
                      }
                      sx={{ marginRight: 0, marginBottom: 0 }}
                    />
                  </StyledRadioOption>
                ))}
              </RadioGroup>
            </PoliciesRadioGroupWrapper>
          </PoliciesRadioContainer>
        </PoliciesRadioSection>
      </StyledBox>
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
