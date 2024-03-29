import React, { PropsWithChildren, forwardRef } from 'react';

import { Button as MuiButton, buttonClasses, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { deepmerge } from '../../utils';

export type IuiButtonProps = ButtonProps & { iconsize?: number };

const ButtonRoot = styled(MuiButton)<ButtonProps>(({ startIcon, endIcon }) => ({
  padding: startIcon || endIcon ? '8px 20px' : '8px 28px',
  borderRadius: 0,
}));

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IuiButtonProps>>(
  (props: IuiButtonProps, ref) => {
    const resolveProps: IuiButtonProps = { ...props, disableElevation: true };
    const styleOverride: ButtonProps = {
      ...resolveProps,
      ...(props.iconsize && {
        sx: deepmerge(
          {
            [`& .${buttonClasses.endIcon}`]: {
              '& > *:nth-of-type(1)': {
                fontSize: props.iconsize,
              },
            },
            [`& .${buttonClasses.startIcon}`]: {
              '& > *:nth-of-type(1)': {
                fontSize: props.iconsize,
              },
            },
          },
          resolveProps.sx
        ),
      }),
    };

    return <ButtonRoot ref={ref} {...styleOverride} />;
  }
);

Button.displayName = 'Button';

export default Button;
