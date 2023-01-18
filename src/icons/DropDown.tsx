import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { deepmerge } from '../utils';

export default function DropDown(props: SvgIconProps) {
  const { sx, ...rest } = props;

  return (
    <SvgIcon
      viewBox="0 0 12 6"
      sx={deepmerge(
        {
          width: '12px',
        },
        sx
      )}
      {...rest}
    >
      <path
        d="M6 6L0.803847 -2.51245e-08L11.1962 8.834e-07L6 6Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
