import React from 'react';

import {
  MenuItem as MuiMenuItem,
  menuItemClasses,
  MenuItemProps,
} from '@mui/material';

import { common, insurBlue } from '../../system/colors';
import { deepmerge } from '../../utils';

const MenuItem = (props: MenuItemProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiMenuItem
      sx={deepmerge(
        {
          paddingInline: '10px',
          fontSize: '14px',
          shadow: 'none',
          [`&&.${menuItemClasses.selected}`]: {
            backgroundColor: common.white,
            color: insurBlue[500],
            fontWeight: 500,
            [`&:hover, &.${menuItemClasses.focusVisible}`]: {
              backgroundColor: insurBlue[100],
            },
          },
          [`&:hover, &.${menuItemClasses.focusVisible}`]: {
            backgroundColor: insurBlue[100],
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default MenuItem;
