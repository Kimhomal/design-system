import { ThemeProvider, useTheme } from '@emotion/react';
import React from 'react';
import createTheme from '../../system/createTheme';
import { ThemeOptions } from '../../system/createTheme/createTheme';
// import ThemeProvider from '../../system/ThemeProvider';
// import useTheme from '../../system/useTheme';

const Component = () => {
  const theme = useTheme();

  return (
    <pre>
      <code>{JSON.stringify(theme, null, 2)}</code>
    </pre>
  );
};

const Theming = (customTheme: ThemeOptions) => {
  const theme = createTheme(customTheme);

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
};

export default Theming;
