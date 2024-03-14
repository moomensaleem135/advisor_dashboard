'use client';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

import RowRadioButtonsGroup from '@/components/core/RadioButtons/RadioButton';

import {
  MainDescription,
  MainHeading,
  ReportMonthDetail,
  ReportMainBox,
  ReportSubBox,
  CustomTabs,
  CustomTab,
  ReportMainBoxRadius,
  ReportBoxDivider
} from './index.styles';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const tasks = [
  'Adv 1 Review',
  'ADV Filing',
  'Advertising / Marketing Review',
  'AML Review',
  'Annual Compliance Report',
  'Attestations',
  'Best Execution',
  'Books & Records Review',
  'Client Billing Review',
  'Client File Review',
  'Client Meeting',
  'Client Portfolio Review',
  'Client Suitability',
  'Client Success Call',
  'Code of Ethics',
  'Compliant File',
  'Correspondence Review'
];

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      padding: '0 10px',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #C3CAD2'
    }}
  >
    {children}
  </div>
);
const options = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' }
];
const byDateOptions = {
  advertisementOptions: [
    'Advertising Review',
    'Billing Review',
    'Correspondence Review',
    'Compliance Meeting',
    'Books & Records'
  ],
  month: [
    { year: '2024', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2023', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2022', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2021', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2020', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] }
  ]
};

const taskMonths = {
  month: [
    { year: '2024', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2023', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2022', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2021', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] },
    { year: '2020', subOptions: ['1st Qtr', '2nd Qtr', '3rd Qtr', '4th Qtr'] }
  ]
};
export default function Reports() {
  const [value, setValue] = React.useState(0);
  const [chechBoxValue, setCheckBoxValue] = useState<string>('January');
  const defaultSelectedValue = options[0].value === 'January' ? true : false;
  const [showPdf, setShowPdf] = useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleRadioChange = (value: string) => {
    setCheckBoxValue(value);
  };

  const yearAndMoth = (year: string, month: string) => {
    if (year === '2024' && month === '1st Qtr') {
      setShowPdf(true);
    } else {
      setShowPdf(false);
    }
  };

  const handleClose = () => {
    setShowPdf(false);
  };

  return (
    <>
      <ReportMainBox>
        <ReportSubBox>
          <MainHeading>Reports</MainHeading>
          <MainDescription>
            Select by date or specific tasks name to generate on demand your firm’s historical
            compliance reports.{' '}
          </MainDescription>
          <ReportMainBoxRadius>
            <ReportBoxDivider>
              <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <CustomTab label="By Date" {...a11yProps(0)} />
                <CustomTab label="By Task Name" {...a11yProps(1)} />
                <CustomTab label="Custom Search" {...a11yProps(2)} />
              </CustomTabs>
            </ReportBoxDivider>
            <CustomTabPanel value={value} index={0}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <RowRadioButtonsGroup
                      options={options}
                      onChange={handleRadioChange}
                      defaultChecked={defaultSelectedValue}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <ReportMonthDetail>
                      <Box>
                        <Typography> {chechBoxValue}</Typography>

                        {byDateOptions.advertisementOptions.map((item, index) => (
                          <Typography key={index}>{item}</Typography>
                        ))}
                      </Box>
                      <Box>
                        <Typography>Billing Review</Typography>
                        <Box>
                          {byDateOptions.month.map((items, index) => {
                            return (
                              <details key={index}>
                                <summary>{items.year}</summary>
                                <ul>
                                  {items.subOptions.map((item, index) => {
                                    return (
                                      <li key={index} onClick={() => yearAndMoth(items.year, item)}>
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </details>
                            );
                          })}
                        </Box>
                      </Box>
                    </ReportMonthDetail>
                  </Grid>
                </Grid>
              </Box>
            </CustomTabPanel>
            {/* task name */}
            <CustomTabPanel value={value} index={1}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={3} style={{ padding: 0, margin: 0, border: '1px solid #C3CAD2' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '42px',
                          fontSize: 16,
                          fontWeight: 600,
                          color: '#3A6FB6',
                          borderBottom: '1px solid #C3CAD2',
                          textDecoration: 'underline'
                        }}
                      >
                        Task List
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 10px',
                          height: '42px',
                          fontSize: 16,
                          fontWeight: 600,
                          borderBottom: '1px solid #C3CAD2',
                          columnGap: 8,
                          backgroundColor: '#F4F5F6'
                        }}
                      >
                        <SearchIcon />
                        <span style={{ fontSize: 14, fontWeight: 500 }}>Search.....</span>
                      </div>
                      <div style={{ maxHeight: 600, overflow: 'auto' }}>
                        {tasks.map((item, index) => (
                          <ListItem key={index}>{item}</ListItem>
                        ))}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <ReportMonthDetail style={{ padding: '0 16px' }}>
                      {/* not showing this currently */}
                      <Box style={{ display: 'none' }}>
                        <Typography> {chechBoxValue}</Typography>

                        {byDateOptions.advertisementOptions.map((item, index) => (
                          <Typography key={index}>{item}</Typography>
                        ))}
                      </Box>
                      {/*  */}
                      <Box style={{ paddingLeft: 10 }}>
                        <Typography>Attestations</Typography>
                        <Box>
                          {taskMonths.month.map((items, index) => {
                            return (
                              <details key={index}>
                                <summary>{items.year}</summary>
                                <ul>
                                  {items.subOptions.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                  })}
                                </ul>
                              </details>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box style={{ display: 'flex', columnGap: 6, color: '#3A6FB6' }}>
                        <span>Save All </span>|<span>Print All</span>
                      </Box>
                    </ReportMonthDetail>
                  </Grid>
                </Grid>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Custom Search
            </CustomTabPanel>
          </ReportMainBoxRadius>
        </ReportSubBox>
      </ReportMainBox>
      <Dialog
        open={showPdf}
        onClose={handleClose}
        aria-labelledby="pdf-preview-dialog"
        maxWidth="lg" // Adjust dialog size
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <iframe src="/svgs/Client_Billing_Report.pdf" style={{ width: '70vw', height: '80vh' }} />
        </DialogContent>
      </Dialog>
    </>
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
