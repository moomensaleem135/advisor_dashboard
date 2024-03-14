'use client';
import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, FormControlLabel, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import { useSearchParams } from 'next/navigation';
import React, { useRef, useState } from 'react';

import Modal from '@/components/pages-partials/advisorForm/modal';

import { FlexBox, FlexDiv, Heading, Main, StyledButton } from '../../message/index.styles';
import {
  ButtonStyle,
  ButtonStyled,
  FormDiv,
  FormHeading,
  InputWrap,
  RadioDiv,
  StyledForm,
  StyledInputLabel,
  StyledInputTask,
  SubHeading,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow
} from './index.styles';

const initialValues = {
  title: '',
  date: '',
  checkboxes: [],
  security: '',
  file: ''
};

const Task1 = () => {
  const buttons = ['Message Center', 'Make a Request', 'Tasks', 'Training'];
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });
  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [selectCheckbox, setSelectCheckbox] = useState('');

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckbox(label === selectedCheckbox ? '' : label);
    formik.handleChange;
  };
  const handleCheckbox = (label: string) => {
    setSelectCheckbox(label === selectCheckbox ? '' : label);
    formik.handleChange;
  };

  const checkboxLabels = ['March', 'June', 'September'];
  const securityCheckbox = ['Yes', 'No'];

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : '');
    console.log('Selected file:', selectedFile ? selectedFile.name : '');
    formik.handleChange;
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButton = (event: any) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      <Heading>Your Compliance Requests</Heading>
      <FlexDiv>
        {buttons.map((button, index) => (
          <StyledButton
            key={index}
            style={{
              backgroundColor: button === 'Tasks' ? `${COLORS.BLUE_600}` : 'default-color',
              color: button === 'Tasks' ? `${COLORS.WHITE_100}` : 'default-color'
            }}
          >
            {button}
          </StyledButton>
        ))}
      </FlexDiv>
      <FormDiv>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormHeading>Personal Security Report</FormHeading>
          <SubHeading>Description</SubHeading>
          <FlexBox>
            <InputWrap>
              <StyledInputLabel>Title:</StyledInputLabel>
              <StyledInputTask
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
            </InputWrap>
            <InputWrap style={{ width: '50%' }}>
              <StyledInputLabel>Date:</StyledInputLabel>
              <StyledInputTask
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="date"
              />
            </InputWrap>
          </FlexBox>
          <RadioDiv>
            <InputLabel variant="standard">Quarter Ending</InputLabel>
            <Box sx={{ display: 'flex' }}>
              {checkboxLabels.map((label, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      key={index}
                      name="checkbox"
                      value={label}
                      onBlur={formik.handleBlur}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CircleIcon />}
                      checked={label === selectedCheckbox}
                      onChange={() => handleCheckboxChange(label)}
                      sx={{
                        '&.Mui-checked': {
                          color: `${COLORS.BLUE_200}`,
                          '& .MuiSvgIcon-root': {
                            fill: `${COLORS.BLUE_200}`
                          }
                        }
                      }}
                    />
                  }
                  label={label}
                />
              ))}
            </Box>
          </RadioDiv>
          <RadioDiv>
            <InputLabel variant="standard">I have purchased securities</InputLabel>
            <Box sx={{ display: 'flex' }}>
              {securityCheckbox.map((label, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      key={index}
                      name="security"
                      value={formik.values.security}
                      onBlur={formik.handleBlur}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CircleIcon />}
                      checked={label === selectCheckbox}
                      onChange={() => handleCheckbox(label)}
                      sx={{
                        '&.Mui-checked': {
                          color: `${COLORS.BLUE_200}`,
                          '& .MuiSvgIcon-root': {
                            fill: `${COLORS.BLUE_200}`
                          }
                        }
                      }}
                    />
                  }
                  label={label}
                />
              ))}
            </Box>
          </RadioDiv>
          <TableContainer>
            <Table>
              <TableHead>
                <tr>
                  <TableHeader>Date</TableHeader>
                  <TableHeader>Security</TableHeader>
                  <TableHeader>Buy & Sell</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>Broker</TableHeader>
                </tr>
              </TableHead>
              <tbody>
                {[...Array(4)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <ButtonStyled onClick={handleButtonClick}>Upload Attachments</ButtonStyled>
                {selectedFileName && (
                  <span style={{ color: 'blue', textDecoration: 'underline' }}>
                    {selectedFileName}
                  </span>
                )}
                <input
                  type="file"
                  name="file"
                  value={formik.values.file}
                  onBlur={formik.handleBlur}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </Box>
              <ButtonStyle onClick={handleButton}>Sign & Submit to CCO</ButtonStyle>
            </Box>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </TableContainer>
        </StyledForm>
      </FormDiv>
    </Main>
  );
};

export default Task1;
