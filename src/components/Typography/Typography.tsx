import React from 'react';

import { Typography as MuiTypography, TypographyProps } from '@mui/material';

const Typography = <C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }>
) => {
  return <MuiTypography {...props} />;
};

export default Typography;
