import React, { useMemo } from 'react';
import { Theme } from '../createTheme/createTheme';
import useTheme from '../useTheme';
import ThemeContext from '../useTheme/ThemeContext';

interface ThemeProviderProps {
  theme: Theme;
  children?: React.ReactNode;
}

function mergeOuterLocalTheme(outerTheme: Theme, localTheme: Theme): Theme {
  return { ...outerTheme, ...localTheme };
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: localTheme,
  children,
  ...rest
}) => {
  const outerTheme = useTheme();

  const theme = useMemo(() => {
    let output: Theme =
      outerTheme === null
        ? localTheme
        : mergeOuterLocalTheme(outerTheme, localTheme);

    return output;
  }, [outerTheme, localTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
