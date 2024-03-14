import { COLORS } from '@/constants/colors';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { useState } from 'react';

import { FormControlLabelStyles } from '@/components/core/RadioButtons/RadioButton.styles';

import { StyledImageTextContainerRequest } from '../status/index.styles';
import { CustomSignButton, CustomTableHead, GenericBox, TableBoxContainer } from './index.styles';

const options = [
  { value: 'Approve', label: 'Approve' },
  { value: 'Changes needed prior to approval', label: 'Changes needed prior to approval' },
  { value: 'Declined with notes', label: 'Declined with notes' },
  { value: 'Custom Reply', label: 'Custom Reply' }
];

function Row(props: any) {
  const { row, isSelected, handleClick } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const formatMessage = (message: string) => {
    return message.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
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
  const downloadImage = (src: string, alt: string): void => {
    const link = document.createElement('a');
    link.href = src;

    // Derive filename from URL
    const urlParts = src.split('/');
    const filename = urlParts[urlParts.length - 1];
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
          backgroundColor: isSelected ? `${COLORS.GREY_200}` : 'inherit' //
        }}
        onClick={() => {
          handleClickOpen();
          handleClick(row);
        }}
        style={{ cursor: 'pointer' }}
      >
        <TableCell
          component="th"
          scope="row"
          sx={{
            fontSize: isSelected ? `20px` : '15px',
            fontWeight: isSelected ? `500` : '500'
          }}
        >
          {row.date}
        </TableCell>
        <TableCell
          align="left"
          sx={{
            fontSize: isSelected ? `20px` : '15px',
            fontWeight: isSelected ? `500` : '500'
          }}
        >
          {row.type}
        </TableCell>
        <TableCell
          align="left"
          sx={{
            fontSize: isSelected ? `20px` : '15px',
            fontWeight: isSelected ? `500` : '500'
          }}
        >
          {row.advisorName}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                borderBottom: `1px solid ${COLORS.GREY_400}`,
                padding: '15px'
              }}
            >
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <Typography>{formatMessage(row.message)}</Typography>
                </TableBody>
                <StyledImageTextContainerRequest
                  onClick={() => downloadImage(row.imageSrc, row.title)}
                  style={{ cursor: 'pointer', margin: '5px 0' }}
                >
                  {getFileIcon(row.imageSrc)}
                </StyledImageTextContainerRequest>
              </Table>
            </Box>
            <Box
              sx={{
                margin: '30px 10px'
              }}
            >
              <RadioGroup
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  color: 'green'
                }}
                row
                aria-label="options"
                name="options"
                value={selectedValue}
                onChange={handleChange}
              >
                {options.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item.value}
                      control={
                        <Radio
                          sx={{
                            '&.Mui-checked': {
                              color: '#25A32A'
                            }
                          }}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CircleIcon />}
                        />
                      }
                      label={item.label}
                      sx={{ marginLeft: '5px' }}
                    />
                  );
                })}
              </RadioGroup>
            </Box>
            <Box sx={{ textAlign: 'end', marginBottom: '40px', marginRight: '20px' }}>
              <CustomSignButton>Sign & Approve</CustomSignButton>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  {
    advisorName: 'Tom J',
    type: 'Marketing/ Advertising',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.pdf',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Sara H',
    type: 'Complaint Filed',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.pdf',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'John H',
    type: 'Termed Client',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.pdf',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'John H',
    type: 'Termed Client',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.pdf',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Daniel G',
    type: 'Political Contribution',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.pdf',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Barry C',
    type: 'Marketing/ Advertising',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.doc',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Carries T',
    type: 'Outside Business Activates ',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.doc',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Tom J',
    type: 'Gifts / Gratuities  ',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.doc',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Brie L',
    type: 'New Client Onboarding ',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.doc',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  },
  {
    advisorName: 'Timothy O',
    type: 'Trade Error ',
    date: '4/1/2023',
    imageSrc: '/svgs/checklist.doc',
    message:
      'HI Dave, \n Attached please find new brochure for the CIT’s that we plan on rolling out to new clients effective 2/1/24.\nPlease look at attachment and let us know your through by 1/25/24.\nThanks,\nTomJ'
  }
];

export default function CollapsibleTable() {
  const [selectedRow, setSelectedRow] = useState(null); // State to track selected row

  const handleClick = (row: any) => {
    setSelectedRow(row); // Update selectedRow state with the clicked row
  };

  return (
    <TableBoxContainer>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ background: `${COLORS.BLUE_800}` }}>
            <TableRow>
              <CustomTableHead sx={{ width: '400px' }}>Date</CustomTableHead>
              <CustomTableHead align="left">Type</CustomTableHead>
              <CustomTableHead align="left">Advisor Name</CustomTableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row
                key={index}
                row={row}
                isSelected={selectedRow === row} // Pass whether the row is selected or not
                handleClick={handleClick} // Pass the handleClick function
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableBoxContainer>
  );
}
