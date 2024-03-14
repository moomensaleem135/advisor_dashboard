'use client';

import { COLORS } from '@/constants/colors';
import { ExpandMore } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  Box,
  Collapse,
  DialogActions,
  Grid,
  List,
  TextField,
  TextareaAutosize,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import RowRadioButtonsGroup from '@/components/core/RadioButtons/RadioButton';

import {
  StyledImageBox,
  StyledImageSize,
  StyledImageText,
  StyledImageTextContainer,
  StyledImageWrapper,
  StyledListItem,
  StyledPolicyContent,
  StyledPolicyItem,
  StyledPolicyWrapper,
  StyledPreview,
  StyledPreviewContainer,
  StyledTableColumns
} from '../../policies/index.styles';
import { ReportButtonBox, ReportCustomButton } from '../index.styles';
import {
  AllRequestPara,
  GridMainHeading,
  SecondGridMainBox,
  RadioButtonHeading,
  SecondGridGenericBox,
  CheckBoxTypography,
  StatusSecondGridMainBox,
  RequestStatusHeadRow,
  PendingReviewBox,
  PendingTypography,
  SendingButton,
  SelectTypography,
  StatusEmployeeMainBox,
  CustomStatusEmailTypography,
  NameCustomBox,
  ApprovedRequestTypography,
  StyledImageTextContainerRequest,
  StyledImageTextRequestStatus,
  SendEmailTypography,
  RemoveRadioButtonBorder,
  CustomCurrentlyTypography,
  CustomSaveButton,
  CustomPreviewButton,
  CustomEmailHistoryTypography,
  CustomBoxHover,
  CustomModalNameTypography,
  CustomEmailModalTypography,
  SendEmailDescriptionTypography,
  CustomEmailRemindarButton,
  CustomAprroveSignatureTypography,
  SignatureTypography,
  DialogueBox
} from './index.styles';

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

const employeData = [
  {
    name: 'John',
    email: 'johnsmith@company.com',
    date: '03/24/2024',
    title: 'sumbit',
    imageSrc: '/svgs/checklist.doc'
  }
  // {
  //   name: 'Rachel Altman',
  //   email: 'rachel@company.com',
  //   date: '4/1/2023',
  //   title: 'sumbit',
  //   imageSrc: '/svgs/checklist.doc'
  // },
  // {
  //   name: 'Sarah Johnson',
  //   email: 'sarah@company.com',
  //   date: '4/1/2023',
  //   title: 'due',
  //   imageSrc: '/svgs/checklist.doc'
  // },
  // {
  //   name: 'Kevin Clancy',
  //   email: 'kevinc@company.com',
  //   date: '4/1/2023',
  //   title: 'due',
  //   imageSrc: '/svgs/checklist.doc'
  // },
  // {
  //   name: 'Kevin Clancy',
  //   email: 'kevinc@company.com',
  //   date: '4/1/2023',
  //   title: 'due',
  //   imageSrc: '/svgs/checklist.doc'
  // }
];

const Modaloptions = [
  {
    value: 'One Time',
    label: 'One Time'
  },
  {
    value: 'Every 24 hours starting from initial remindar',
    label: 'Every 24 hours starting from initial remindar'
  },
  {
    value: 'Every 2 days',
    label: 'Every 2 days'
  },
  {
    value: 'Every 3 days',
    label: 'Every 3 days'
  },
  {
    value: 'Every 7 days',
    label: 'Every 7 days'
  },
  {
    value: 'Cancel Remindar',
    label: 'Cancel Remindar'
  }
];
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
    color: 'black'
  },
  '& .MuiDialogContent-root.MuiDialogContent-dividers.css-6nt8xb-MuiDialogContent-root': {
    border: 'none !important'
  },
  '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-kmnvkl-MuiPaper-root-MuiDialog-paper':
    {
      minWidth: '800px'
    },
  '.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-1t0pcae':
    {
      minWidth: '800px'
    },
  '.MuiDialogContent-root.MuiDialogContent-dividers.css-x88jnw': {
    border: 'none !important'
  }
}));

const dummyData = [
  {
    name: 'John Smith',
    email: 'john123@gmail.com',
    previousHistory: [
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      }
    ]
  },
  {
    name: 'Andrew Robison',
    email: 'john123@gmail.com',
    previousHistory: [
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      }
    ]
  },
  {
    name: 'Sally Gray',
    email: 'john123@gmail.com',
    previousHistory: [
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      },
      {
        title: '3/01/2014'
      }
    ]
  }
];
const labels = [
  'I agree to submit all marketing and advertising material including social media posts to the CCO for approval prior to pasting or public dissemination.',
  'I will not use texting, private messaging or social media for communication with clients or for any other significant business purpose. All communication with clients will be done through our secure email system, phone or direct mail.',
  `I have read each of the Firm's policies including the <strong><u>Code of Ethics, Policies &amp; Procedures Manual &amp; Social Media Policy</u></strong>. I understand their requirements and I was given enough time to ask the CCO all my questions.`,
  'I agree to use the Firm Communication System (SecureRIA) for all requests and other messages to the CCO.',
  `I will begin the 10-minute training on the Firm Communication System (SecureRIA) within 48 hours of the date of this attestation.`,
  `I'll begin <strong><u>Month 1 of the Firm's Cybersecurity Training Here.</strong></u>`,
  `I'll complete the New Advisor <strong><u>Personal Securities Transaction Report.</strong></u>`
];

export default function RequestStatus() {
  const [value, setValue] = React.useState(0);
  const [chechBoxValue, setCheckBoxValue] = useState<string>('New Advisor Onboarding');
  const [subject, setSubject] = useState('');
  const defaultSelectedValue = options[0].value === 'New Advisor Onboarding' ? true : false;
  const [content, setContent] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [open, setOpen] = useState<boolean[]>(Array(dummyData.length).fill(false));
  const [formData, setFormData] = useState({
    fromName: '',
    fromEmailAddress: '',
    fromSubjectLine: '',
    emailMessage: ''
  });
  const [approve, setApprove] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClickOpen2 = () => {
    setOpenModal2(true);
  };
  const handleClickOpen3 = () => {
    setOpenModal3(true);
  };
  const handleClose2 = () => {
    setOpenModal2(false);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleClose3 = () => {
    setOpenModal3(false);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleRadioChange = (value: string) => {
    setCheckBoxValue(value);
  };

  const getFileIcon = (filename: string): JSX.Element | null => {
    const extension = filename.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <Image src={'/svgs/pdf.svg'} width={30} height={30} alt="pdf icon" />;
      case 'doc':
        return <Image src={'/svgs/doc.svg'} width={30} height={30} alt="doc icon" />;
      default:
        return null;
    }
  };

  const handleClick = (index: number): void => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  };
  // Code for autoPopulated Name and date for a time being
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (employeData.length > 0) {
      setName(employeData[0].name);
    }
    const dateParts = employeData[0].date.split('/');
    const formattedDate = `${dateParts[2]}-${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(
      2,
      '0'
    )}`;
    setSelectedDate(formattedDate);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AllRequestPara>All Requests</AllRequestPara>
          <RowRadioButtonsGroup
            options={options}
            onChange={handleRadioChange}
            defaultChecked={defaultSelectedValue}
          />
        </Grid>
        <Grid item xs={8}>
          <StatusSecondGridMainBox>
            <GridMainHeading>New Advisor Onboarding</GridMainHeading>
            <PendingReviewBox>
              <PendingTypography>Pending Review</PendingTypography>
              <SendingButton onClick={handleClickOpen}>
                <Box>
                  <Typography style={{ fontSize: 15, fontWeight: 500 }}>
                    Send Email Reminder
                  </Typography>
                  <Box>
                    <Image
                      src={'/svgs/SendingIcon.svg'}
                      height={20}
                      width={20}
                      alt="calendar-icon"
                    />
                  </Box>
                </Box>
              </SendingButton>
            </PendingReviewBox>
            <SelectTypography>Select a name and approve the form below</SelectTypography>
            <Box>
              <RequestStatusHeadRow>
                <CheckBoxTypography sx={{ width: '140px' }}>DATE SENT</CheckBoxTypography>

                <CheckBoxTypography sx={{ width: '60%' }}>EMPLOYEE</CheckBoxTypography>

                <CheckBoxTypography
                  sx={{
                    textAlign: 'end',
                    width: '40%'
                  }}
                >
                  STATUS
                </CheckBoxTypography>
              </RequestStatusHeadRow>
            </Box>
            <SecondGridGenericBox>
              {employeData.map((item, index) => {
                return (
                  <StatusEmployeeMainBox key={index}>
                    <Typography sx={{ width: '150px' }}>{item.date}</Typography>
                    <Box sx={{ width: '60%' }}>
                      <Typography>{item.name}</Typography>
                      <CustomStatusEmailTypography>{item.email}</CustomStatusEmailTypography>
                    </Box>
                    <Typography
                      style={{
                        marginLeft: '60px',
                        width: '40%',
                        textAlign: 'end'
                      }}
                    >
                      <span className={item.title !== 'due' ? 'reportgreen' : 'reportred'}>
                        {item.title !== 'due' ? 'REPORT SUBMITTED' : 'REPORT DUE'}
                      </span>
                    </Typography>
                  </StatusEmployeeMainBox>
                );
              })}
            </SecondGridGenericBox>

            <SecondGridGenericBox sx={{ padding: '10px' }}>
              <GridMainHeading>New Advisor Onboarding</GridMainHeading>
              <GridMainHeading>Description</GridMainHeading>
              <NameCustomBox>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                  <label htmlFor="nameid">Name:</label>
                  <input
                    type="text"
                    id="nameid"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'end'
                  }}
                >
                  <label htmlFor="nameid">Date:</label>
                  <input
                    type="date"
                    id="nameid"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{ width: '100px' }}
                  />
                </Box>
              </NameCustomBox>
              <SecondGridMainBox>
                <RadioButtonHeading>New Advisor Attestations</RadioButtonHeading>
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
                  {labels.map((label, index) => (
                    <FormGroup key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<CircleIcon />}
                            sx={{
                              '&.Mui-checked': {
                                color: '#25A32A'
                              }
                            }}
                          />
                        }
                        label={<span dangerouslySetInnerHTML={{ __html: label }} />}
                      />
                    </FormGroup>
                  ))}
                </div>
              </SecondGridMainBox>
              <ReportButtonBox>
                <ReportCustomButton
                  variant="contained"
                  onClick={() => {
                    handleClickOpen3();
                  }}
                >
                  Sign & Approve
                </ReportCustomButton>
              </ReportButtonBox>
            </SecondGridGenericBox>
            {approve && (
              <SecondGridGenericBox sx={{ padding: '10px 20px' }}>
                <ApprovedRequestTypography>APPROVED REQUESTS</ApprovedRequestTypography>

                <Box sx={{ marginBottom: '10px' }}>
                  <RequestStatusHeadRow>
                    <CheckBoxTypography sx={{ width: '250px' }}>DATE</CheckBoxTypography>

                    <CheckBoxTypography sx={{ width: '30%' }}>TASK NAME</CheckBoxTypography>

                    <CheckBoxTypography
                      sx={{
                        textAlign: 'end',
                        width: '40%'
                      }}
                    >
                      Request
                    </CheckBoxTypography>
                  </RequestStatusHeadRow>
                </Box>
                {employeData.map((item, index) => {
                  return (
                    <StatusEmployeeMainBox key={index}>
                      <Box sx={{ width: '250px' }}>
                        <Typography sx={{ marginBottom: '5px' }}>
                          {' '}
                          <span className={'reportgreen'}>{'REPORT DUE'}</span>
                        </Typography>
                        <Typography>{item.date}</Typography>
                      </Box>
                      <Box sx={{ width: '60%' }}>
                        <Box sx={{ width: '100%' }}>
                          <Typography sx={{ marginBottom: '5px' }}>
                            {' '}
                            <span className={'reportGrey'}>{'VALUATION & FEES'}</span>
                          </Typography>
                          <Box sx={{ display: 'flex' }}>
                            <Typography
                              sx={{
                                display: 'flex'
                              }}
                            >
                              {item.name}-
                              <CustomStatusEmailTypography>
                                {item.email}
                              </CustomStatusEmailTypography>
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <StyledImageTextContainerRequest
                        // onClick={() => downloadImage(item.imageSrc, item.title)}
                        style={{ cursor: 'pointer' }}
                      >
                        {getFileIcon(item.imageSrc)}
                        <StyledImageWrapper>
                          <StyledImageTextRequestStatus>
                            {item.imageSrc.split('/').pop()}{' '}
                            <Image
                              src={'/svgs/download.svg'}
                              width={20}
                              height={20}
                              alt="download"
                            />
                          </StyledImageTextRequestStatus>
                          <StyledImageSize>50KB</StyledImageSize>
                        </StyledImageWrapper>
                      </StyledImageTextContainerRequest>
                    </StatusEmployeeMainBox>
                  );
                })}
              </SecondGridGenericBox>
            )}
          </StatusSecondGridMainBox>
        </Grid>
      </Grid>
      {/* //Signature Modal */}
      <DialogueBox>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openModal3}
        >
          <SendEmailTypography sx={{ marginTop: '20px !important' }} id="customized-dialog-title">
            ADOPT SIGNATURE AND SUBMIT
          </SendEmailTypography>
          <IconButton
            aria-label="close"
            onClick={handleClose3}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'black'
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            sx={{ borderTop: `1px solid ${COLORS.GREY_400}`, padding: '30px !important' }}
          >
            <hr style={{ borderTop: `1px solid ${COLORS.GREY_400}`, marginTop: '-20px' }} />
            <Box style={{ borderBottom: `2px solid ${COLORS.RED_400}`, textAlign: 'center' }}>
              <Image src="/svgs/signature.svg" height={150} width={150} alt="signature" />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 40
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom: `1px solid ${COLORS.GREY_400}`,
                    paddingBottom: '10px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/svgs/greenTick.svg" height={30} width={30} alt="signature" />
                  </Box>
                  <CustomAprroveSignatureTypography>
                    Click to Approve Signature
                  </CustomAprroveSignatureTypography>
                </Box>
                <Box>
                  <SignatureTypography>Signature</SignatureTypography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom: `1px solid ${COLORS.GREY_400}`,
                    paddingBottom: '10px',
                    width: '150px'
                  }}
                >
                  <Box>03/24/2024</Box>
                </Box>
                <Box>
                  <SignatureTypography>Date</SignatureTypography>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <CustomEmailRemindarButton
              autoFocus
              onClick={() => {
                setApprove(true), handleClose3();
              }}
              sx={{ padding: '0 30px' }}
            >
              Approved
            </CustomEmailRemindarButton>
          </DialogActions>
        </BootstrapDialog>
      </DialogueBox>
      <Box>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openModal}
        >
          <SendEmailTypography sx={{ marginTop: '20px !important' }} id="customized-dialog-title">
            Send Remindar
          </SendEmailTypography>
          <SendEmailDescriptionTypography sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Only those who have not completed the form will recieve an email notification
          </SendEmailDescriptionTypography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'black'
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            sx={{ borderTop: `1px solid ${COLORS.GREY_400}`, padding: '30px !important' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px',
                marginTop: '-20px',
                borderTop: `1px solid ${COLORS.GREY_400} !important`
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: '600', marginTop: '15px' }}>
                From Name
              </Typography>
              <TextField
                name="fromName"
                value={formData.fromName}
                onChange={handleChange}
                label="From Name"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                From Email Address
              </Typography>
              <TextField
                name="fromEmailAddress"
                value={formData.fromEmailAddress}
                onChange={handleChange}
                label="From Email Address"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                From Subject Line
              </Typography>
              <TextField
                name="fromSubjectLine"
                value={formData.fromSubjectLine}
                onChange={handleChange}
                label="From Subject Line"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Email Message
              </Typography>
              <TextareaAutosize
                name="emailMessage"
                value={formData.emailMessage}
                onChange={handleChange}
                aria-label="empty textarea"
                placeholder="Message"
                style={{
                  width: '100%',
                  minHeight: '100px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  resize: 'none'
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <CustomEmailRemindarButton autoFocus onClick={handleClickOpen2}>
              Send Remindar
            </CustomEmailRemindarButton>
          </DialogActions>
        </BootstrapDialog>
      </Box>
      <Box>
        <BootstrapDialog
          onClose={handleClose2}
          aria-labelledby="customized-dialog-title"
          open={openModal2}
        >
          <SendEmailTypography sx={{ marginTop: '20px !important' }} id="customized-dialog-title">
            Send Remindar Request Remindar
          </SendEmailTypography>

          <IconButton
            aria-label="close"
            onClick={handleClose2}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'black'
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            sx={{ borderTop: `1px solid ${COLORS.GREY_400}`, padding: '30px !important' }}
          >
            <Box
              sx={{
                width: '100%',
                marginBottom: '20px',
                marginTop: '-20px',
                borderTop: `1px solid ${COLORS.GREY_400} !important`
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: '600', marginTop: '15px' }}>
                Manage Automatic Email Remindar
              </Typography>
              <SecondGridGenericBox sx={{ padding: '10px' }}>
                <RemoveRadioButtonBorder>
                  <RowRadioButtonsGroup
                    options={Modaloptions}
                    onChange={handleRadioChange}
                    defaultChecked={defaultSelectedValue}
                    RadioCheckedColor={`${COLORS.BLUE_800}`}
                    formControlStyles={true}
                  />
                </RemoveRadioButtonBorder>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                    padding: '0 10px'
                  }}
                >
                  <CustomCurrentlyTypography>
                    Currently set after every 3 days
                  </CustomCurrentlyTypography>
                  <CustomSaveButton>Save</CustomSaveButton>
                </Box>
              </SecondGridGenericBox>
              <Box sx={{ textAlign: 'end' }}>
                <CustomPreviewButton>Preview Email</CustomPreviewButton>
              </Box>
            </Box>
            <CustomEmailHistoryTypography>Email History</CustomEmailHistoryTypography>
            <SecondGridGenericBox sx={{ marginTop: '0px', padding: '10px' }}>
              <CustomEmailHistoryTypography sx={{ marginBottom: '10px' }}>
                Click Name to open Email History
              </CustomEmailHistoryTypography>
              {dummyData.map((policy, index) => (
                <StyledPolicyWrapper key={index} style={{ marginBottom: '20px' }}>
                  <StyledPolicyItem style={{ margin: '0' }}>
                    <StyledPolicyContent>
                      <StyledTableColumns>
                        <CustomModalNameTypography>{policy.name}</CustomModalNameTypography>
                      </StyledTableColumns>
                      <StyledTableColumns>
                        <StyledImageBox>
                          <CustomEmailModalTypography>{policy.email}</CustomEmailModalTypography>
                        </StyledImageBox>
                      </StyledTableColumns>
                    </StyledPolicyContent>
                  </StyledPolicyItem>
                  <StyledPreviewContainer role="button" onClick={() => handleClick(index)}>
                    <StyledPreview>
                      {open[index] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                      View History
                    </StyledPreview>
                  </StyledPreviewContainer>
                  <Collapse in={open[index]}>
                    <List component="div" disablePadding>
                      {policy.previousHistory.map((version, versionIndex) => (
                        <CustomBoxHover key={versionIndex}>
                          <SecondGridGenericBox
                            sx={{ marginTop: '0px !important', padding: '5px 10px' }}
                          >
                            {version.title}
                          </SecondGridGenericBox>
                        </CustomBoxHover>
                      ))}
                    </List>
                  </Collapse>
                </StyledPolicyWrapper>
              ))}
            </SecondGridGenericBox>
          </DialogContent>
        </BootstrapDialog>
      </Box>
    </Box>
  );
}
