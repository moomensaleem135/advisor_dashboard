'use client';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import RowRadioButtonsGroup from '@/components/core/RadioButtons/RadioButton';

import RequestAdvisor from './advisor';
import AdvReview from './advReview';
import CreateOwnRequestContent from './createRequest';
import Execution from './execution';
import {
  RequestMainDescription,
  RequestMainHeading,
  RequestMainBox,
  RequestSubBox,
  CustomTabs,
  CustomTab,
  RequestMainBoxRadius,
  RequestBoxDivider,
  AllRequestPara
} from './index.styles';
import MarketingAttestation from './marketingAttestaion';
import MeetingAttestation from './meetingAttestation';
import NewAdvisorOnboardingContent from './newAdvisor';
import PersonalSecurityReportContent from './personalSecurity';
import PoliciesAttestation from './policiesAttestation';
import RegulatoryUpdates from './regulatoryUpdates';
import SocialAttestation from './socialAttestation';
import RequestStatus from './status';
import Training from './training';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const options = [
  { value: 'New Advisor Onboarding', label: 'New Advisor Onboarding' },
  { value: 'Create Own Request', label: 'Create Own Request' },
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

export default function Request() {
  const [value, setValue] = React.useState<number>(0);
  const [checkBoxValue, setCheckBoxValue] = useState('New Advisor Onboarding');
  const [subject, setSubject] = useState<string>('');

  const [content, setContent] = useState<string>('');
  const [selectedContent, setSelectedContent] = useState<any>();
  const searchParams = useSearchParams();
  const search = searchParams.get('params');
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(subject);
  const handleTabChange = (newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    // const currentTab=localStorage.getItem("advisorRequest")
    if (search) {
      handleRadioChange(search);
    } else {
      handleRadioChange(options[0].value);
    }
  }, [search]);

  const handleRadioChange = (selectedRequest: string) => {
    setCheckBoxValue(selectedRequest);
    switch (selectedRequest) {
      case 'New Advisor Onboarding':
        setSelectedContent(
          <NewAdvisorOnboardingContent
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="New Advisor Onboarding Request"
            subTitle="Complete New Advisor Request Form Below"
            onSendRequest={() => handleTabChange(1)}
          />
        );
        break;
      case 'Create Own Request':
        setSelectedContent(
          <CreateOwnRequestContent
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Create Your Own Request"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Personal Security Report':
        setSelectedContent(
          <PersonalSecurityReportContent
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Personal Securities Transaction "
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Regulatory / News Update':
        setSelectedContent(
          <RegulatoryUpdates
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Regulatory / News Update"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Policies Attestation':
        setSelectedContent(
          <PoliciesAttestation
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Policies Attestation"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Meeting Attestation':
        setSelectedContent(
          <MeetingAttestation
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Meeting Attestation"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'ADV 2B Review':
        setSelectedContent(
          <AdvReview
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="ADV 2B Review"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Training':
        setSelectedContent(
          <Training
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Training"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Advertising / Marketing Attestation':
        setSelectedContent(
          <MarketingAttestation
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Advertising / Marketing Attestation"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Best Execution':
        setSelectedContent(
          <Execution
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Best Execution"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      case 'Social Media / Off Channel Attestation':
        setSelectedContent(
          <SocialAttestation
            checkBoxValue={selectedRequest}
            content={content}
            setContent={setContent}
            title="Social Media / Off Channel Attestation"
            subTitle="Complete Request Form Below"
          />
        );
        break;
      // Add cases for other radio button options as needed
      default:
        setSelectedContent(null);
    }
  };
  const router = useRouter();

  return (
    <RequestMainBox>
      <RequestSubBox>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
          <RequestMainHeading>Advisor Requests </RequestMainHeading>
          <RequestMainDescription>
            Create, send, track and receive requests for all of your advisors below. Use any of the
            pre-built templates provided or you can create custom messages to send to your staff.
          </RequestMainDescription>
        </div>
        <RequestMainBoxRadius>
          <RequestBoxDivider>
            <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <CustomTab label="Create Advisor Request" {...a11yProps(0)} />
              <CustomTab
                label="Status"
                {...a11yProps(1)}
                onClick={() => router.replace('/request')}
              />
              <CustomTab label="Advisor Messages" {...a11yProps(2)} />
            </CustomTabs>
          </RequestBoxDivider>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4} style={{ paddingTop: 76 }}>
                  <AllRequestPara>All Requests</AllRequestPara>

                  <RowRadioButtonsGroup
                    options={options}
                    onChange={handleRadioChange}
                    defaultChecked={true}
                  />
                </Grid>
                <Grid item xs={8}>
                  {!selectedContent && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      <CircularProgress size={25} />
                    </Box>
                  )}

                  {selectedContent}
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <RequestStatus />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <RequestAdvisor />
          </CustomTabPanel>
        </RequestMainBoxRadius>
      </RequestSubBox>
    </RequestMainBox>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
