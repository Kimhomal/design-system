import React from 'react';
import './Button.css';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <MuiButton variant="contained">{props.label}</MuiButton>;
};

export default Button;
