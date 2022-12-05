import React from 'react';
import { Button as MuiButton, buttonClasses, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deepmerge } from '../../utils';
import { red } from '../../system/colors';

const ButtonRoot = styled(MuiButton)<ButtonProps>(({ startIcon, endIcon }) => ({
  paddingBlock: 6,
  paddingLeft: startIcon ? 8 : 12,
  paddingRight: endIcon ? 8 : 12,
  borderRadius: 0,
  fontWeight: 400,
}));

const TableButton = (props: ButtonProps) => {
  const { color, ...withoutColor } = props;
  const resolveProps: ButtonProps = { ...withoutColor, disableElevation: true };
  const styleOverride: ButtonProps = {
    ...resolveProps,
    sx: deepmerge(
      {
        ...(color === 'error' && {
          borderColor: red[500],
          '&:hover': {
            borderColor: red[600],
            color: red[600],
            backgroundColor: 'transparent',
          },
          [`&.${buttonClasses.disabled}`]: {
            borderColor: red[500],
            color: red[500],
            opacity: 0.4,
          },
        }),
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

  return <ButtonRoot color={color} {...styleOverride} />;
};

export default TableButton;
