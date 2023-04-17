import React from 'react';

import {
  ToggleButton as MuiToggleButton,
  toggleButtonClasses,
  ToggleButtonProps,
} from '@mui/material';

import { common, grey, insurBlue, lineGrey } from '../../system/colors';
import { deepmerge } from '../../utils';

const ToggleButton = (props: ToggleButtonProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiToggleButton
      sx={deepmerge(
        {
          width: WIDTH,
          height: 36,
          borderRadius: 'unset',
          borderColor: lineGrey[200],
          borderRight: 'unset',
          color: grey[300],
          '&:hover': {
            backgroundColor: common.white,
          },
          '&:not(:first-of-type)': {
            width: WIDTH + 1,
            clipPath: 'inset(0 0 0 1px)',
          },
          '&:last-of-type': {
            borderRight: `1px solid ${lineGrey[200]}`,
          },
          [`&.${toggleButtonClasses.selected}`]: {
            backgroundColor: insurBlue[500],
            borderColor: insurBlue[500],
            color: common.white,
          },
          [`&.${toggleButtonClasses.selected}:hover`]: {
            backgroundColor: insurBlue[500],
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default ToggleButton;

const WIDTH = 100;
