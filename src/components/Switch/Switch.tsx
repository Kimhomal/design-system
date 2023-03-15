import React from 'react';

import { Switch as MuiSwitch, switchClasses, SwitchProps } from '@mui/material';

import { blueGrey, common } from '../../system/colors';
import { deepmerge } from '../../utils';

const Switch = (props: SwitchProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiSwitch
      sx={deepmerge(
        {
          width: '44px',
          height: '24px',
          margin: '8px',
          padding: 0,
          [`.${switchClasses.switchBase}`]: {
            padding: '2px',
            [`&.${switchClasses.checked}`]: {
              color: common.white,
            },
            [`&.${switchClasses.checked}+.${switchClasses.track}`]: {
              opacity: 1,
            },
          },
          [`.${switchClasses.thumb}`]: {
            boxShadow: 'none',
          },
          [`.${switchClasses.track}`]: {
            borderRadius: '20px',
            opacity: 1,
            backgroundColor: blueGrey[300],
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default Switch;
