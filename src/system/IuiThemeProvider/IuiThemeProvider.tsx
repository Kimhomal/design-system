import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import createIuiTheme, { ThemeMode } from '../createIuiTheme';

interface IuiThemeProviderProps {
  mode: ThemeMode;
}

const IuiThemeProvider: React.FC<
  React.PropsWithChildren<IuiThemeProviderProps>
> = ({ mode, children }) => {
  const theme = createIuiTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};

export default IuiThemeProvider;
