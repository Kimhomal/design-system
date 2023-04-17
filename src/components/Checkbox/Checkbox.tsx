import React from 'react';

import {
  Checkbox as MuiCheckbox,
  checkboxClasses,
  CheckboxProps,
} from '@mui/material';

import CheckboxChecked from '../../icons/CheckboxChecked';
import CheckboxUnChecked from '../../icons/CheckboxUnChecked';
import { blueGrey, lineGrey } from '../../system/colors';
import { deepmerge } from '../../utils';

const Checkbox = (props: CheckboxProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiCheckbox
      size="small"
      disableRipple
      icon={<CheckboxUnChecked />}
      checkedIcon={<CheckboxChecked />}
      sx={deepmerge(
        {
          padding: '8px',
          color: lineGrey[200],
          [`&.${checkboxClasses.disabled}`]: {
            color: blueGrey[400],
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default Checkbox;
