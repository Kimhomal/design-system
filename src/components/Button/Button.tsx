import React from 'react';
import './Button.css';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  label: string;
  variant: 'text' | 'outlined' | 'contained';
}

const Button = (props: ButtonProps) => {
  return <MuiButton variant={props.variant}>{props.label}</MuiButton>;
};

export default Button;
