import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, InputAdornment } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';

interface DataGridTableProps {
  rows: any[];
  columns: GridColDef[];
}

const DataGridTable: React.FC<DataGridTableProps> = ({ rows, columns }) => {
  const [filteredRows, setFilteredRows] = useState<any[]>(rows);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredRows(filtered);
  }, [searchText, rows]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={{ height: 350, width: '100%' }}>
      <TextField
        id="search-bar"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        placeholder="Search Employees"
        sx={{
          marginBottom: 0,
          '.css-19nzxr9-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '0px !important',
            borderTopLeftRadius: '4px !important',
            borderTopRightRadius: '4px !important'
          }
        }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        checkboxSelection
        autoHeight={false}
        hideFooterPagination
        hideFooter
        disableColumnFilter
        disableColumnMenu
        sx={{
          width: '100%',
          maxHeight: '280px',
          border: 0,
          '.MuiDataGrid-cell MuiDataGrid-withBorderColor': {
            width: '0px !important'
          },
          '.MuiDataGrid-row': {
            borderRadius: '8px',
            marginTop: '12px',
            border: '1px solid #C3CAD2',
            width: '99.8%'
          },
          '.MuiDataGrid-columnHeaders': {
            border: '1px solid #C3CAD2',
            borderRadius: '0',
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
