import React from 'react';

import {
  inputBaseClasses,
  menuClasses,
  menuItemClasses,
  Select as MuiSelect,
  selectClasses,
  SelectProps,
} from '@mui/material';

import DropDown from '../../icons/DropDown';
import { grey, insurBlue, lineGrey } from '../../system/colors';
import typography from '../../system/typography';
import { deepmerge } from '../../utils';

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
            paddingBlock: '8px',
            ...typography.body2_r,
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
        MenuListProps: {
          sx: {
            [`.${menuItemClasses.root}`]: {
              paddingBlock: '8px',
              ...typography.body2_r,
            },
          },
        },
      }}
      {...rest}
    />
  );
};

export default Select;
