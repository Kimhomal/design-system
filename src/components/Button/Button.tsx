import React from 'react';
import './Button.css';
import MuiButton from '@mui/material/Button';

export interface ButtonProps {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = (props: ButtonProps) => {
  return <MuiButton variant={props.variant || 'text'}>{props.label}</MuiButton>;
};

export default Button;
