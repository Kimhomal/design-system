import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import React from 'react';

const Typography = <C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }>
) => {
  return <MuiTypography {...props} />;
};

export default Typography;
