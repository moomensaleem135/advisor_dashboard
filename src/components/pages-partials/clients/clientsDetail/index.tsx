'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { StyledTasksFluidContainer } from '../../policies/index.styles';

// import Table from '../../core/table';
// import {
//   StyledButton,
//   StyledHeaderText,
//   StyledHeaderWrapper,
//   StyledTasksContainer,
//   StyledTasksFluidContainer
// } from '../tasks/index.styles';
// import NewTaskForm from '../tools/calendar/form';

const columns = [
  {
    field: 'client',
    headerName: 'CLIENT',
    width: 200,
    renderCell: (params: any) => <Box sx={{ color: 'blue' }}>{params.value}</Box>
  },
  {
    field: 'contact',
    headerName: 'CONTACT',
    width: 150
  },
  {
    field: 'email',
    headerName: 'EMAIL',
    width: 250,
    renderCell: (params: any) => (
      <Box sx={{ color: 'blue', textDecoration: 'underline' }}>{params.value}</Box>
    )
  },
  {
    field: 'date',
    headerName: 'EFFECTIVE DATE',
    width: 150
  },
  {
    field: 'action',
    headerName: '',
    width: 150,
    sortable: false,
    align: 'right',
    renderCell: (params: any) => (
      <Image
        src="/svgs/editVector.svg"
        height={20}
        width={20}
        alt=""
        onClick={() => handleImageClick(params.row)}
        style={{ position: 'absolute', right: 40 }}
      />
    )
  }
];
const handleImageClick = (rowData: any) => {};

const rows = [
  {
    client: 'Sample Advisors LLC',
    contact: 'John Smith',
    email: 'johnSmith@company.com',
    date: '8/9/2018'
  },
  {
    client: 'Top Consulting',
    contact: 'Rachel Altman',
    email: 'rachel@company.com',
    date: '8/9/2018'
  },
  {
    client: 'Sample Company',
    contact: 'Sarah Johnson',
    email: 'sarah@company.com',
    date: '8/9/2018'
  }
];
interface ColumnWidths {
  client: number;
  contact: number;
  email: number;
  date: number;
  action: number;
}

export default function ClientDetals() {
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>({
    client: 200,
    contact: 150,
    email: 250,
    date: 150,
    action: 150
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      const newWidths = { ...columnWidths } as ColumnWidths;
      if (window.innerWidth > 1700) {
        newWidths.client = 350;
        newWidths.contact = 200;
        newWidths.email = 350;
        newWidths.date = 200;
        newWidths.action = 150;
      } else if (window.innerWidth > 1500) {
        newWidths.client = 300;
        newWidths.contact = 200;
        newWidths.email = 350;
        newWidths.date = 200;
        newWidths.action = 100;
      } else {
        newWidths.client = 200;
        newWidths.contact = 150;
        newWidths.email = 280;
        newWidths.date = 230;
        newWidths.action = 50;
      }
      setColumnWidths(newWidths);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledTasksFluidContainer>
      {/* <StyledTasksContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>Clients</StyledHeaderText>
          <StyledButton onClick={handleOpenForm}>Add New Client</StyledButton>
        </StyledHeaderWrapper>
        <Table
          columns={columns.map((col) => ({
            ...col,
            width: columnWidths[col.field as keyof ColumnWidths]
          }))}
          rows={rows}
        />
      </StyledTasksContainer>
      <NewTaskForm
        title="client"
        open={isFormOpen}
        onClose={handleCloseForm}
        // onFormSubmit={handleFormSubmit}
      /> */}
      <Box style={{ marginTop: '-30px' }}>
        <Image src={'/svgs/clientdetails.svg'} height={900} width={1000} alt="" />
      </Box>
    </StyledTasksFluidContainer>
  );
}
