import '@emotion/react';
import { Theme as iuiTheme } from '../system/createTheme/createTheme';

declare module '@emotion/react' {
  export interface Theme extends iuiTheme {}
}
