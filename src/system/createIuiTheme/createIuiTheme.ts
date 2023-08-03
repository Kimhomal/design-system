import { formControlLabelClasses } from '@mui/material';
import { buttonClasses } from '@mui/material/Button';
import { red as MuiRed } from '@mui/material/colors';
import { createTheme, Theme, ThemeOptions, alpha } from '@mui/material/styles';

import { deepmerge } from '../../utils';
import blueGrey from '../colors/blueGrey';
import grey from '../colors/grey';
import insurBlue from '../colors/insurBlue';
import lineGrey from '../colors/lineGrey';
import red from '../colors/red';
import NotoSansKR500Eot from '../fonts/noto-sans-kr-v27-korean-500.eot';
import NotoSansKR500Svg from '../fonts/noto-sans-kr-v27-korean-500.svg';
import NotoSansKR500Woff from '../fonts/noto-sans-kr-v27-korean-500.woff';
import NotoSansKR500Woff2 from '../fonts/noto-sans-kr-v27-korean-500.woff2';
import NotoSansKR700Eot from '../fonts/noto-sans-kr-v27-korean-700.eot';
import NotoSansKR700Svg from '../fonts/noto-sans-kr-v27-korean-700.svg';
import NotoSansKR700Woff from '../fonts/noto-sans-kr-v27-korean-700.woff';
import NotoSansKR700Woff2 from '../fonts/noto-sans-kr-v27-korean-700.woff2';
import NotoSansKREot from '../fonts/noto-sans-kr-v27-korean-regular.eot';
import NotoSansKRSvg from '../fonts/noto-sans-kr-v27-korean-regular.svg';
import NotoSansKRWoff from '../fonts/noto-sans-kr-v27-korean-regular.woff';
import NotoSansKRWoff2 from '../fonts/noto-sans-kr-v27-korean-regular.woff2';
import typography from '../typography';

export type ThemeMode = 'admin' | 'self' | 'parts' | 'repair';

const modes: Record<ThemeMode, ThemeOptions> = {
  admin: {
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local(''),
              url(${NotoSansKRWoff2}) format('woff2'), /* Super Modern Browsers */
              url(${NotoSansKRWoff}) format('woff'), /* Modern Browsers */
              url(${NotoSansKRSvg}) format('svg'), /* Legacy iOS */
              url(${NotoSansKREot}) format('embedded-opentype'); /* IE Compat Modes */
          }
          @font-face {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: local(''),
              url(${NotoSansKR500Woff2}) format('woff2'),
              url(${NotoSansKR500Woff}) format('woff'),
              url(${NotoSansKR500Svg}) format('svg'),
              url(${NotoSansKR500Eot}) format('embedded-opentype');
          }
          @font-face {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local(''),
              url(${NotoSansKR700Woff2}) format('woff2'),
              url(${NotoSansKR700Woff}) format('woff'),
              url(${NotoSansKR700Svg}) format('svg'),
              url(${NotoSansKR700Eot}) format('embedded-opentype');
          }
        `,
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                '&:hover, &:focus': {
                  backgroundColor: theme.palette.insurBlue[600],
                },
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' && {
                borderColor: theme.palette.primary.main,
                '&:hover, &:focus': {
                  color: theme.palette.insurBlue[600],
                  borderColor: theme.palette.insurBlue[600],
                  backgroundColor: 'transparent',
                },
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'secondary' && {
                borderColor: theme.palette.blueGrey[300],
                color: theme.palette.grey[900],
                '&:hover, &:focus': {
                  borderColor: theme.palette.blueGrey[600],
                  backgroundColor: 'transparent',
                },
              }),
            [`&.${buttonClasses.disabled}`]: {
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                  color: theme.palette.common.white,
                  backgroundColor: alpha(theme.palette.primary.main, 0.4),
                }),
              ...(ownerState.variant === 'outlined' &&
                ownerState.color === 'primary' && {
                  color: alpha(theme.palette.primary.main, 0.4),
                  backgroundColor: 'transparent',
                  borderColor: alpha(theme.palette.primary.main, 0.4),
                }),
              ...(ownerState.variant === 'outlined' &&
                ownerState.color === 'secondary' && {
                  color: theme.palette.blueGrey[400],
                  backgroundColor: theme.palette.blueGrey[100],
                  borderColor: theme.palette.lineGrey[200],
                }),
            },
            [`& .${buttonClasses.startIcon}`]: {
              marginRight: 0,
            },
            [`& .${buttonClasses.endIcon}`]: {
              marginLeft: 0,
            },
          }),
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            [`.${formControlLabelClasses.label}`]: {
              ...theme.typography.body2_r,
            },
            ...(ownerState.disabled && {
              [`&& .${formControlLabelClasses.label}`]: {
                color: theme.palette.blueGrey[600],
              },
            }),
          }),
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          color: 'primary',
        },
      },
      MuiToggleButton: {
        defaultProps: {
          color: 'primary',
        },
      },
    },
    palette: {
      primary: {
        main: '#3B69E6',
      },
      error: {
        main: '#ff0400',
      },
      lineGrey: lineGrey,
      insurBlue: insurBlue,
      grey: grey,
      blueGrey: blueGrey,
      red: deepmerge(MuiRed, red),
    },
    typography,
  },
  self: {},
  parts: {},
  repair: {},
};

const createIuiTheme = (mode: ThemeMode): Theme => {
  const theme = createTheme(modes[mode]);
  return theme;
};

export default createIuiTheme;
