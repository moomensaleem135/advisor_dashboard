'use client';
import { COLORS } from '@/constants/colors';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { BackText, FlexDiv, Heading, Main, StyledButton } from './index.styles';
import DataGridTable from './table';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const initialRows = [
  { id: 1, date: '4/1/2023', activity: 'Personal Security Report', due: '5/1/2023' },
  { id: 2, date: '3/23/2023', activity: 'Regulatory / News Update', due: '4/1/2023' },
  { id: 3, date: '2/15/2023', activity: 'Policies Attestation', due: '3/1/2023' },
  { id: 4, date: '4/1/2023', activity: 'Reminder: Personal Securities Report', due: '5/1/2023' },
  { id: 5, date: '3/23/2023', activity: 'Custom Request', due: '4/1/2023' },
  { id: 6, date: '2/15/2023', activity: 'Meeting Attestation', due: '3/1/2023' },
  { id: 7, date: '4/1/2023', activity: 'ADV 2B Review ', due: '5/1/2023' },
  { id: 8, date: '3/23/2023', activity: 'Cybersecurity Training', due: '4/1/2023' },
  { id: 9, date: '2/15/2023', activity: 'Advertising & Marketing Attestation ', due: '3/1/2023' },
  {
    id: 10,
    date: '2/15/2023',
    activity: 'Social Media & off Channel Attestation  ',
    due: '3/1/2023'
  },
  { id: 11, date: '2/15/2023', activity: 'Annual Best Execution', due: '3/1/2023' }
];

const columns = [
  { field: 'date', headerName: 'Date', width: 350 },
  {
    field: 'activity',
    headerName: 'Activity Request Type',
    width: 400
  },
  { field: 'due', headerName: 'DUE', width: 100 }
];

const MessageCenter = () => {
  const buttons = ['Message Center', 'Make a Request', 'Task', 'Training'];
  const router = useRouter()
  const navigation = () => {
router.push('/advisor_dashboard/otp')
  }
  return (
    <Main>
      <Box sx={{display:'flex', cursor:'pointer'}} onClick={navigation} >
        <Image src="/svgs/goback.svg" height={30} width={25} alt='' />
        <BackText>Back</BackText>
      </Box>
      <Heading>Your Compliance Requests</Heading>
      <FlexDiv>
        {buttons.map((button, index) => (
          <LinkStyle
            key={index}
            href={`/advisor_dashboard/${button.toLowerCase().replace(/\s+/g, '')}`}
            passHref
          >
            <StyledButton
              key={index}
              style={{
                backgroundColor:
                  button === 'Message Center' ? `${COLORS.BLUE_600}` : 'default-color',
                color: button === 'Message Center' ? `${COLORS.WHITE_100}` : 'default-color'
              }}
            >
              {button}
            </StyledButton>
          </LinkStyle>
        ))}
      </FlexDiv>
      <DataGridTable rows={initialRows} columns={columns} />
    </Main>
  );
};

export default MessageCenter;
