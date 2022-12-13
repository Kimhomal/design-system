import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function DropDown(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 12 6"
      sx={{
        width: '12px',
      }}
      {...props}
    >
      <path
        d="M6 6L0.803847 -2.51245e-08L11.1962 8.834e-07L6 6Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
