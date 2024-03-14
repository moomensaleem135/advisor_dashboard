import { Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
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
import { StyledAttestContainer, StyledBox, StyledCheckBoxesWrapper } from './index.styles';

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

const meetingCheckboxes = [
  {
    label: 'Risk Assessment',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Performance Advertising',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Books Records',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Disclosures on Testimonials',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Regulatory/Legal Updates',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'ADV 2',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Correspondence',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Retrospective Review',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Biling',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Investment Committee Minutes',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Fees',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Code of Ethics',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Best Execution',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Business Continuity Plan',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Incident Response Plan',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Political Contributions',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Cybersecurity Training',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Password Policy',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Internal Compliance Bulletin',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Mock SEC Audit',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Social Media',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'SEC Exam Priorities',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Personal Security Reports',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Suitability',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Outside Business Activities',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Vendor Due Diligence',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'New Client Setup',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Succession Plan',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Custody Audit',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Solicitors/Partners',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Attestations',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Advisory Agreement',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Marketing',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Trade Error Policy',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Trade Blotter/Transaction Summary Political Contributions',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'DOL Rollover',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Term/Complaint File',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Broker Relationships',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'RIA Financial Condition',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  },
  {
    label: 'Annual Review',
    icon: '/svgs/checkBoxIcon.svg',
    checkedIcon: '/svgs/SeletedCheckBox.svg'
  }
];

export default function MeetingAttestation({
  content,
  setContent,
  title,
  subTitle
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
      <StyledBox>
        {/* radio button section */}
        <StyledAttestContainer>
          <div style={{ marginBottom: '10px' }}>
            Click the topics below you would like to include in the compliance meeting attestation
          </div>
          <StyledCheckBoxesWrapper>
            {meetingCheckboxes.map((checkbox, index) => (
              <div key={index} style={{ flex: index % 2 === 0 ? '0 0 60%' : '1 0 40%' }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<Image src={checkbox.icon} alt="checkbox" width={20} height={20} />}
                        checkedIcon={
                          <Image src={checkbox.checkedIcon} alt="selected" width={20} height={20} />
                        }
                      />
                    }
                    label={checkbox.label}
                  />
                </FormGroup>
              </div>
            ))}
          </StyledCheckBoxesWrapper>
          <ReportButtonBox>
            <ReportCustomButton variant="contained">Save to Agenda</ReportCustomButton>
          </ReportButtonBox>
        </StyledAttestContainer>
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
