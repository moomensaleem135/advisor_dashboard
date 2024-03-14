'use client';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import RowRadioButtonsGroup from '@/components/core/RadioButtons/RadioButton';

import { StyledButton } from '../clients/index.styles';
import { StyledHeadingContainer } from '../insights/index.styles';
import { ReportMainBox, ReportSubBox } from '../reports/index.styles';
import { CustomTab, CustomTabs, RequestBoxDivider } from '../request/index.styles';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const options = [
  { value: 'Instructions', label: 'Instructions' },
  // { value: 'Acknowledgement', label: 'Acknowledgement' },
  // { value: 'Master Logs & Suppemental Forms', label: 'Master Logs & Suppemental Forms' },
  { value: 'Page 1 ', label: 'Page 1 ' },
  { value: 'Page 2', label: 'Page 2 ' },
  { value: 'Page 3 ', label: 'Page 3 ' },
  { value: 'Page 4 ', label: 'Page 4 ' },
  { value: 'Page 5 ', label: 'Page 5' },
  { value: 'Page 6', label: 'Page 6' },
  { value: 'Page 7', label: 'Page 7' },
  { value: 'Page 8', label: 'Page 8' },
  { value: 'Page 9', label: 'Page 9' },
  { value: 'Page 10', label: 'Page 10' }
];

interface FormData {
  legalName: string;
  abbrName: string;
  address: string;
  phoneFirm: string;
  phoneRCC: string;
  website: string;
  services: string;
}

const NewPolicies = () => {
  const [value, setValue] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    legalName: '',
    abbrName: '',
    address: '',
    phoneFirm: '',
    phoneRCC: '',
    website: '',
    services: ''
  });
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add your form submission logic here
  };
  const defaultSelectedValue = options[0].value === 'Instructions' ? true : false;
  const handleRadioChange = (value: string) => {};

  return (
    <ReportMainBox>
      <ReportSubBox>
        <ContentWrapper>
          <GridWrapper>
            <BlueText style={{ visibility: 'hidden' }}>3 / 12 Pages Complete</BlueText>
            <Grid item xs={4}>
              <RowRadioButtonsGroup
                options={options}
                onChange={handleRadioChange}
                defaultChecked={defaultSelectedValue}
              />
            </Grid>
          </GridWrapper>
          <FormWrapper>
            <Heading>Create New Manual</Heading>

            {/* <RequestBoxDivider>
              <CustomTabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
                <CustomTab label="Policies and Procedures" {...a11yProps(0)} disabled />
                <CustomTab label="Code of Ethics" {...a11yProps(1)} disabled />
              </CustomTabs>
            </RequestBoxDivider> */}
            <StyledHeadingContainer style={{ justifyContent: 'start', marginTop: '-4px' }}>
              Policies and Procedures | Code of Ethics | Cyber Policy
            </StyledHeadingContainer>
            {/* <CustomTabPanel value={value} index={1}></CustomTabPanel> */}
            {/* <CustomTabPanel value={value} index={2}></CustomTabPanel> */}
            <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Advisor Name</h3>
              <InputWrapper>
                <InputLabel htmlFor="legalName">Name of Firm</InputLabel>
                <Input
                  type="text"
                  id="legalName"
                  name="legalName"
                  value={formData.legalName}
                  onChange={handleChange}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor="abbrName">Date Established</InputLabel>
                <Input
                  type="text"
                  id="abbrName"
                  name="abbrName"
                  value={formData.abbrName}
                  onChange={handleChange}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor="address">Address</InputLabel>
                <StyledTextArea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor="phoneFirm">Branch Locations</InputLabel>
                <Input
                  type="tel"
                  id="phoneFirm"
                  name="phoneFirm"
                  value={formData.phoneFirm}
                  onChange={handleChange}
                />
              </InputWrapper>

              <StyledButton type="submit">Next</StyledButton>
            </Form>
          </FormWrapper>
        </ContentWrapper>
      </ReportSubBox>
    </ReportMainBox>
  );
};

export default NewPolicies;

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

const Input = styled.input`
  border: 1px solid #c3cad2;
  padding: 9px 10px 9px 10px;
  border-radius: 4px;
  gap: 10px;
  outline: none;
`;

const InputLabel = styled.label`
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0.625rem 0rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0.625rem 0rem;
`;

const Form = styled.form`
  border: 1px solid #c3cad2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  height: 100%;
  width: 100%;
`;

const RadioInput = styled.input`
  margin: 0;
`;

const BlueText = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: #0977ec;
  margin: 0rem;
  margin-bottom: 0.35rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 110px;
  resize: none;
  border: 1px solid #c3cad2;
  padding: 9px 10px 9px 10px;
  border-radius: 4px;
  gap: 10px;
  outline: none;
`;

const GridWrapper = styled.div`
  position: relative;
  top: 55px;
  width: 30%;
  min-width: 290px;
`;

const Heading = styled.h1`
  margin: 0px;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
