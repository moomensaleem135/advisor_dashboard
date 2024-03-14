'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Table from '../../core/table';
import {
  StyledButton,
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledTasksContainer,
  StyledTasksFluidContainer
} from '../tasks/index.styles';
import NewTaskForm from '../tools/calendar/form';

const columns = [
  {
    field: 'name',
    headerName: 'NAME',
    width: 250
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
    field: 'title',
    headerName: 'TITLE',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    width: 150,
    renderCell: (params: any) => (
      <Box sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</Box>
    )
  },
  {
    field: 'hireDate',
    headerName: 'HIRE DATE',
    type: 'number',
    width: 150
  },
  {
    field: 'action',
    headerName: '',
    width: 150,
    sortable: false,
    align: 'right',
    renderCell: (params: any) => (
      <>
        <Image
          src="/svgs/editVector.svg"
          height={20}
          width={20}
          alt=""
          onClick={() => handleImageClick(params.row)}
          style={{ position: 'absolute', right: 40 }}
        />
      </>
    )
  }
];
const handleImageClick = (rowData: any) => {};

const rows = [
  { name: 'John Smith', email: 'johnSmith@company.com', title: 'CEO', hireDate: '8/9/2018' },
  { name: 'Rachel Altman', email: 'rachel@company.com', title: 'COO', hireDate: '8/9/2018' },
  { name: 'Sarah Johnson', email: 'sarah@company.com', title: 'CMO', hireDate: '8/9/2018' }
];
interface ColumnWidths {
  name: number;
  email: number;
  title: number;
  hireDate: number;
  action: number;
}

export default function Employees() {
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>({
    name: 250,
    email: 250,
    title: 150,
    hireDate: 150,
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
        newWidths.name = 350;
        newWidths.email = 350;
        newWidths.title = 200;
        newWidths.hireDate = 150;
        newWidths.action = 150;
      } else if (window.innerWidth > 1500) {
        newWidths.name = 300;
        newWidths.email = 350;
        newWidths.title = 200;
        newWidths.hireDate = 150;
        newWidths.action = 150;
      } else {
        newWidths.name = 250;
        newWidths.email = 250;
        newWidths.title = 150;
        newWidths.hireDate = 150;
        newWidths.action = 150;
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
      <StyledTasksContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>Employee</StyledHeaderText>
          <StyledButton onClick={handleOpenForm}>Add New Employee</StyledButton>
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
        title="employee"
        open={isFormOpen}
        onClose={handleCloseForm}
        // onFormSubmit={handleFormSubmit}
      />
    </StyledTasksFluidContainer>
  );
}
