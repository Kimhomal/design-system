import React from 'react';
import {
  inputBaseClasses,
  menuClasses,
  Select as MuiSelect,
  selectClasses,
  SelectProps,
} from '@mui/material';
import { grey, insurBlue, lineGrey } from '../../system/colors';
import { deepmerge } from '../../utils';
import DropDown from '../../icons/DropDown';

const Select = (props: SelectProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiSelect
      size="small"
      IconComponent={DropDown}
      sx={deepmerge(
        {
          width: '160px',
          borderRadius: 'unset',
          fontSize: '14px',
          fieldset: {
            borderColor: lineGrey[200],
          },
          [`&:hover .${selectClasses.select} ~ fieldset`]: {
            borderColor: grey[200],
          },
          '&&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${insurBlue[500]}`,
          },
          [`&& .${selectClasses.select}.${inputBaseClasses.input}`]: {
            paddingLeft: '10px',
          },
          [`& .${selectClasses.icon}`]: {
            right: '10px',
          },
        },
        sx
      )}
      MenuProps={{
        PaperProps: {
          sx: {
            border: `1px solid ${lineGrey[200]}`,
            borderRadius: 'unset',
            boxShadow: 'none',
            [`.${menuClasses.list}`]: {
              padding: 0,
            },
          },
        },
      }}
      {...rest}
    />
  );
};

export default Select;
