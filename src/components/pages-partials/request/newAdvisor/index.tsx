import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
import {
  AgrementItemContainer,
  AgrementItemText,
  AgrementItemWrapper,
  HeaderSubTitle,
  HeaderTitle,
  HeaderWrapper
} from './index.styles';

interface NewAdvisorOnboardingContentProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;

  title: string;
  subTitle: string;
  checkBoxValue: string;
  onSendRequest: () => void;
}
interface AgreementItemProps {
  children: React.ReactNode;
}
const agreementItems: React.ReactNode[] = [
  'I agree to submit all marketing and advertising material including social media posts to the CCO for approval prior to pasting or public dissemination.',
  'I will not use texting, private messaging or social media for communication with clients or for any other significant business purpose. All communication with clients will be done through our secure email system, phone or direct mail.',
  <span key="3">
    I have read each of the Firm&apos;s policies including the{' '}
    <strong>
      <u>Code of Ethics, Policies &amp; Procedures Manual &amp; Social Media Policy</u>
    </strong>{' '}
    I understand their requirements and I was given enough time to ask the CCO all my questions.
  </span>,
  'I agree to use the Firm Communication System (SecureRIA) for all requests and other messages to the CCO.',
  <span key="5">
    I will begin the{' '}
    <strong>
      <u>10-minute training on the Firm Communication System </u>
    </strong>
    (SecureRIA) within 48 hours of the date of this attestation.
  </span>,
  `I'll begin Month 1 of the Firm&apos;s Cybersecurity Training Here.`,
  <span key="7">
    I&apos;ll complete the New Advisor{' '}
    <strong>
      <u>Personal Securities Transaction Report.</u>
    </strong>
  </span>
];

const AgreementItem: React.FC<AgreementItemProps> = ({ children }) => (
  <AgrementItemContainer>
    <RadioButtonUncheckedIcon sx={{ color: '#C3CAD2' }} />
    <AgrementItemText>{children}</AgrementItemText>
  </AgrementItemContainer>
);
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

export default function NewAdvisorOnboardingContent({
  content,
  setContent,
  title,
  subTitle,
  checkBoxValue,
  onSendRequest
}: NewAdvisorOnboardingContentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [rows, setRows] = React.useState(initialRows);
  const [subject, setSubject] = useState<string>();
  const toggleDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const clickHandler = () => {
    onSendRequest();
  };

  console.log(content);

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
        <RadioButtonHeading>New Advisor Attestations</RadioButtonHeading>
        <AgrementItemWrapper>
          {agreementItems.map((item, index) => (
            <AgreementItem key={index}>{item}</AgreementItem>
          ))}
        </AgrementItemWrapper>
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
          <ReportCustomButton variant="contained" onClick={clickHandler}>
            Send Request
          </ReportCustomButton>
        </ReportButtonBox>
      </SecondGridMainBox>
    </div>
  );
}
