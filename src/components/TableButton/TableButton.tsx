import React from 'react';
import { Button as MuiButton, buttonClasses, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deepmerge } from '../../utils';

const ButtonRoot = styled(MuiButton)<ButtonProps>(({ startIcon, endIcon }) => ({
  paddingBlock: 6,
  paddingLeft: startIcon ? 8 : 12,
  paddingRight: endIcon ? 8 : 12,
  borderRadius: 0,
  fontWeight: 400,
}));

const TableButton = (props: ButtonProps) => {
  const resolveProps: ButtonProps = { ...props, disableElevation: true };
  const styleOverride: ButtonProps = {
    ...resolveProps,
    sx: deepmerge(
      {
        [`& .${buttonClasses.endIcon}`]: {
          '& > *:nth-of-type(1)': {
            marginTop: '2px',
            fontSize: 14,
          },
        },
        [`& .${buttonClasses.startIcon}`]: {
          '& > *:nth-of-type(1)': {
            marginTop: '2px',
            fontSize: 14,
          },
        },
      },
      resolveProps.sx
    ),
  };

  return <ButtonRoot {...styleOverride} />;
};

export default TableButton;
