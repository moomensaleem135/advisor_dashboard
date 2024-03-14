'use client';
import { COLORS } from '@/constants/colors';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';

import {
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledTasksContainer,
  StyledTasksFluidContainer
} from '../../tasks/index.styles';
import { FilterBox, StyledBoxSection, StyledBoxTextWrapper, StyledModelBox } from './index.styles';

const documentData = [
  {
    imgSrc: '/svgs/Image1.svg',
    docName: 'Updated Marketing Rule Checklist'
    // reviewDate: '8/29/2018'
  },
  {
    imgSrc: '/svgs/Image1.svg',
    docName: 'Updated Marketing Rule Checklist'
    // reviewDate: '8/29/2018'
  },
  {
    imgSrc: '/svgs/Image1.svg',
    docName: 'Updated Marketing Rule Checklist'
    // reviewDate: '8/29/2018'
  },
  {
    imgSrc: '/svgs/Image1.svg',
    docName: 'Updated Marketing Rule Checklist'
    // reviewDate: '8/29/2018'
  }
];
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      }
    }
  }
}));

const ModelDoc = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedOption, setSelectedOption] = React.useState('Due Date');
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (option: string) => {
    // Function to handle menu item click
    setSelectedOption(option); // Set the selected option
    handleClose(); // Close the menu
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const downloadPDF = (pdfUrl: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'download.pdf'; // Set the default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledTasksFluidContainer>
      <StyledTasksContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>Model Documents</StyledHeaderText>
        </StyledHeaderWrapper>
        <FilterBox>
          {' '}
          <div style={{ display: 'inline-block', marginLeft: '25px' }}>
            <Box
              style={{
                border: `1px solid ${COLORS.GREY_400}`,
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px'
              }}
            >
              <Typography sx={{ marginLeft: '10px' }}>Sort by</Typography>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: `${COLORS.BLUE_600} !important`,
                  background: 'white',
                  marginTop: '2px'
                }}
              >
                {selectedOption}
              </Button>
            </Box>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button'
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => handleMenuItemClick('Due Date')}
                disableRipple
                sx={{ width: '190px' }}
              >
                Due Date
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('Alphabetically')} disableRipple>
                Alphabetically
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
            </StyledMenu>
          </div>
        </FilterBox>
        <StyledModelBox>
          {documentData.map((doc, index) => (
            <StyledBoxSection
              key={index}
              // onClick={() =>
              //   downloadPDF(
              //     'https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/CCOR+Checklist.pdf'
              //   )
              // }
            >
              <Image
                src="/images/model-doc.jpg"
                height={160}
                width={140}
                alt="img"
                style={{ boxShadow: '1px 1px 10px grey' }}
              />
              <StyledBoxTextWrapper>
                <div>{doc.docName}</div>
                {/* <div>
                  <b>Review Date: </b>
                  {doc.reviewDate}
                </div> */}
              </StyledBoxTextWrapper>
            </StyledBoxSection>
          ))}
        </StyledModelBox>
      </StyledTasksContainer>
    </StyledTasksFluidContainer>
  );
};

export default ModelDoc;
