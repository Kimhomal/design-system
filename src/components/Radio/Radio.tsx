import React from 'react';
import { Radio as MuiRadio, RadioProps } from '@mui/material';
import RadioChecked from '../../icons/RadioChecked';
import RadioUnChecked from '../../icons/RadioUnChecked';
import { blueGrey, lineGrey } from '../../system/colors';
import { deepmerge } from '../../utils';

const Radio = (props: RadioProps) => {
  const { sx, ...rest } = props;
  return (
    <MuiRadio
      icon={<RadioUnChecked />}
      checkedIcon={<RadioChecked />}
      sx={deepmerge(
        {
          padding: '8px',
          color: lineGrey[200],
          '&.Mui-disabled': {
            color: blueGrey[400],
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default Radio;
