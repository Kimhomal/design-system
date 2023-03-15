import React from 'react';

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';

import { deepmerge } from '../../utils';

const ToggleChipGroup = (props: ToggleButtonGroupProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiToggleButtonGroup
      sx={deepmerge(
        {
          flexWrap: 'wrap',
          rowGap: '10px',
          columnGap: '4px',
        },
        sx
      )}
      {...rest}
    />
  );
};

export default ToggleChipGroup;
