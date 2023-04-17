import '@emotion/react';
import iuiTheme from './system/createIuiTheme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends iuiTheme {}
}
