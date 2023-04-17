import React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const RightArrow = (props: SvgIconProps) => {
  const resolveProps: SvgIconProps = {
    ...props,
    viewBox: '0 0 14 14',
  };

  return (
    <SvgIcon {...resolveProps}>
      <path
        d="M4 2L10 7L4 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgIcon>
  );
};

export default RightArrow;
