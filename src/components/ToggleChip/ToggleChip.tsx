import React from 'react';
import {
  ToggleButton as MuiToggleButton,
  toggleButtonClasses,
  toggleButtonGroupClasses,
  ToggleButtonProps,
} from '@mui/material';
import { blueGrey, common, insurBlue } from '../../system/colors';
import { deepmerge } from '../../utils';

const ToggleChip = (props: ToggleButtonProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiToggleButton
      sx={deepmerge(
        {
          height: '26px',
          paddingInline: '14px',
          fontSize: '12px',
          [`&.${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
            {
              marginLeft: 0,
              border: `1px solid ${blueGrey[200]}`,
              borderRadius: '40px',
              color: blueGrey[500],
              '&:hover': {
                backgroundColor: common.white,
              },
            },
          [`&.${toggleButtonClasses.root}.${toggleButtonClasses.selected}`]: {
            marginLeft: 0,
            borderColor: insurBlue[500],
            borderRadius: '40px',
            backgroundColor: insurBlue[500],
            color: common.white,
            '&:hover': {
              backgroundColor: insurBlue[500],
            },
          },
          [`&.${toggleButtonClasses.root}.${toggleButtonGroupClasses.grouped}.${toggleButtonClasses.selected}:not(:first-of-type)`]:
            {
              borderLeft: `1px solid ${insurBlue[500]}`,
            },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default ToggleChip;

const WIDTH = 100;
