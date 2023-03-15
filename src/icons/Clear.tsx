import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

import { deepmerge } from '../utils';

export default function Clear(props: SvgIconProps) {
  const { sx, ...rest } = props;

  return (
    <SvgIcon
      viewBox="0 0 20 20"
      sx={deepmerge(
        {
          width: '20px',
        },
        sx
      )}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6668 4.67611L15.324 3.33325L10.0002 8.65706L4.67635 3.33325L3.3335 4.67611L8.65731 9.99992L3.3335 15.3237L4.67635 16.6666L10.0002 11.3428L15.324 16.6666L16.6668 15.3237L11.343 9.99992L16.6668 4.67611Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
