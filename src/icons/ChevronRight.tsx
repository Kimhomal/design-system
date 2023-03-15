import React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ChevronRight = (props: SvgIconProps) => {
  const resolveProps: SvgIconProps = { ...props, viewBox: '0 0 20 20' };

  return (
    <SvgIcon {...resolveProps}>
      <path d="M8.33333 5L7.15833 6.175L10.975 10L7.15833 13.825L8.33333 15L13.3333 10L8.33333 5Z" />
    </SvgIcon>
  );
};

export default ChevronRight;
