import { MenuItem, InputLabel } from '@mui/material';
import React from 'react';

import { StyledFormControl, StyledMenuItem, StyledSelect } from './index.styles';

const YearDropdown = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2000 }, (_, i) => 2000 + i);
  const [selectedYear, setSelectedYear] = React.useState(currentYear);

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  return (
    <StyledFormControl fullWidth style={{ marginTop: '-10px' }}>
      <InputLabel id="year-select-label"></InputLabel>
      <StyledSelect
        labelId="year-select-label"
        id="year-select"
        value={selectedYear}
        onChange={handleYearChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '2.5rem',
              border: 'none'
            }
          }
        }}
      >
        {years.map((year) => (
          <StyledMenuItem value={year} key={year}>
            {year}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default YearDropdown;
