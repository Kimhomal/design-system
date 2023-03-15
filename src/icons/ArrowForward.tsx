import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

export default function ArrowFoward(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
