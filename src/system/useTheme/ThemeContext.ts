import { createContext } from 'react';
import { Theme } from '../createTheme/createTheme';

const ThemeContext = createContext<Theme | null>(null);

export default ThemeContext;
