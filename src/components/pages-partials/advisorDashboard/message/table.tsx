import { COLORS } from '@/constants/colors';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, InputAdornment } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface DataGridTableProps {
  rows: any[];
  columns: GridColDef[];
}

const DataGridTable: React.FC<DataGridTableProps> = ({ rows, columns }) => {
  const [filteredRows, setFilteredRows] = useState<any[]>(rows);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  useEffect(() => {
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredRows(filtered);
  }, [searchText, rows]);

  const handleRowClick = (params: any) => {
    const activity = params.row.activity;
    const firstWord = activity.split(' ')[0].toLowerCase();

    router.push(`/advisor_dashboard/task/${encodeURIComponent(firstWord)}`);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        onRowClick={handleRowClick}
        hideFooterPagination
        hideFooter
        disableColumnFilter
        disableColumnMenu
        sx={{
          maxWidth: '70rem',
          margin: 'auto',
          cursor: 'pointer',
          padding: '1rem 1rem',
          maxHeight: '60vh',
          borderRadius: 0,
          '.MuiDataGrid-cell MuiDataGrid-withBorderColor': {
            width: '0px !important',
            outline: 0
          },
          '.MuiDataGrid-cell:focus': {
            outline: 'none'
          },
          '.MuiDataGrid-row': {
            border: '1px solid #C3CAD2',
            outline: 'none'
          },
          '.MuiDataGrid-columnHeaders': {
            border: '1px solid #C3CAD2',
            borderRadius: '0',
            backgroundColor: `${COLORS.BLUE_600}`,
            color: 'white',
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px'
          },
          '.MuiDataGrid-virtualScroller': {
            overflowY: 'auto'
          },
          '.MuiDataGrid-row .MuiDataGrid-withBorderColor': {
            border: 0
          }
        }}
      />
    </Box>
  );
};

export default DataGridTable;
