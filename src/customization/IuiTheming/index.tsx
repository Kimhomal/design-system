import React, { PropsWithChildren } from 'react';

import { ThemeMode } from '../../system/createIuiTheme';
import IuiThemeProvider from '../../system/IuiThemeProvider';

const IuiTheming: React.FC<PropsWithChildren<{ mode: ThemeMode }>> = ({
  mode,
  children,
}) => {
  return <IuiThemeProvider mode={mode}>{children}</IuiThemeProvider>;
};

export default IuiTheming;
