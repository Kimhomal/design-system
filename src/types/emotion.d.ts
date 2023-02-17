import '@emotion/react';
import iuiTheme from './system/createIuiTheme';

declare module '@emotion/react' {
  export interface Theme extends iuiTheme {}
}
