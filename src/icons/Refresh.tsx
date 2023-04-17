import React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Refresh = (props: SvgIconProps) => {
  const resolveProps: SvgIconProps = {
    viewBox: '0 0 20 20',
    // sx: {
    //   fontSize: '14px !important',
    // },
    ...props,
  };

  return (
    <SvgIcon {...resolveProps}>
      <path d="M15.4993 9.15333H11.5443L13.1426 7.50833C11.5501 5.93333 8.97179 5.875 7.37929 7.45C5.78679 9.03083 5.78679 11.58 7.37929 13.1608C8.97179 14.7417 11.5501 14.7417 13.1426 13.1608C13.936 12.3792 14.3326 11.4633 14.3326 10.3083H15.4993C15.4993 11.4633 14.986 12.9625 13.9593 13.9775C11.9118 16.0075 8.58679 16.0075 6.53929 13.9775C4.49762 11.9533 4.48012 8.66333 6.52762 6.63917C8.57512 4.615 11.8593 4.615 13.9068 6.63917L15.4993 5V9.15333Z" />
    </SvgIcon>
  );
};

export default Refresh;
