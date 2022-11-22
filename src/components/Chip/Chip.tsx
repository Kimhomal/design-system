import React from 'react';
import { Chip as MuiChip, chipClasses, ChipProps } from '@mui/material';
import { blueGrey, common, insurBlue } from '../../system/colors';
import { deepmerge } from '../../utils';

const Chip = (props: ChipProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiChip
      sx={deepmerge(
        {
          height: '26px',
          paddingInline: '14px',
          fontSize: '12px',
          [`& .${chipClasses.label}`]: {
            padding: 0,
          },
          [`&.${chipClasses.filledPrimary}`]: {
            '&:hover': {
              backgroundColor: insurBlue[500],
            },
          },
          [`&.${chipClasses.outlined}`]: {
            borderColor: blueGrey[200],
            color: blueGrey[500],
            '&:hover': {
              backgroundColor: common.white,
            },
          },
        },
        sx
      )}
      {...rest}
    />
  );
};

export default Chip;
