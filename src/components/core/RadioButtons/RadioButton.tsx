'use client';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';

import { FormControlLabelStyles } from './RadioButton.styles';

interface RowRadioButtonsGroupProps {
  options: any;
  onChange: (value: string) => void;
  defaultChecked?: boolean;
  styles?: Record<string, any>;
  RadioCheckedColor?: string;
  formControlStyles?: boolean;
  borderRadius?: boolean;
}

const RowRadioButtonsGroup: React.FC<RowRadioButtonsGroupProps> = ({
  options,
  onChange,
  defaultChecked,
  styles,
  RadioCheckedColor = '#25A32A',
  formControlStyles = false,
  borderRadius = false
}) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultChecked && options[0].value);
  const searchParmas = useSearchParams();
  const search = searchParmas.get('params');
  useEffect(() => {
    // const value=localStorage.getItem("advisorRequest");
    if (search) {
      setSelectedValue(search);
    } else {
      setSelectedValue(options[0].value);
    }
  }, [search]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    // localStorage.setItem("advisorRequest",value)
    onChange(value);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormControl>
        <RadioGroup row onChange={handleChange} value={selectedValue} style={styles}>
          {options.map((option: any) => (
            <FormControlLabelStyles
              style={{ width: '100%' }}
              formControlStyle={formControlStyles}
              borderRadius={borderRadius}
              key={option.value}
              value={option.value}
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: RadioCheckedColor
                    }
                  }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CircleIcon />}
                  checked={selectedValue === option.value}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Suspense>
  );
};

export default RowRadioButtonsGroup;
