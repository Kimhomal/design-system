import { createTheme, Theme, ThemeOptions, alpha } from '@mui/material/styles';
import { red as MuiRed } from '@mui/material/colors';
import { buttonClasses } from '@mui/material/Button';
import grey from '../colors/grey';
import blueGrey from '../colors/blueGrey';
import insurBlue from '../colors/insurBlue';
import lineGrey from '../colors/lineGrey';
import red from '../colors/red';
import { deepmerge } from '../../utils';
// import '../../public/fonts/font.css';
// import NotoSansKR700Woff2 from '../../public/fonts/noto-sans-kr-v27-korean-700.woff2';
// import NotoSansKR700Woff from '../../public/fonts/noto-sans-kr-v27-korean-700.woff';
// import NotoSansKR700Svg from '../../public/fonts/noto-sans-kr-v27-korean-700.svg';
// import NotoSansKR700Eot from '../../public/fonts/noto-sans-kr-v27-korean-700.eot';
// import NotoSansKR500Woff2 from '../../public/fonts/noto-sans-kr-v27-korean-500.woff2';
// import NotoSansKR500Woff from '../../public/fonts/noto-sans-kr-v27-korean-500.woff';
// import NotoSansKR500Svg from '../../public/fonts/noto-sans-kr-v27-korean-500.svg';
// import NotoSansKR500Eot from '../../public/fonts/noto-sans-kr-v27-korean-500.eot';
// import NotoSansKRWoff2 from '../../public/fonts/noto-sans-kr-v27-korean-regular.woff2';
// import NotoSansKRWoff from '../../public/fonts/noto-sans-kr-v27-korean-regular.woff';
// import NotoSansKRSvg from '../../public/fonts/noto-sans-kr-v27-korean-regular.svg';
// import NotoSansKREot from '../../public/fonts/noto-sans-kr-v27-korean-regular.eot';

export type ThemeMode = 'admin' | 'self' | 'parts' | 'repair';

const modes: Record<ThemeMode, ThemeOptions> = {
  admin: {
    components: {
      // MuiCssBaseline: {
      //   styleOverrides: `
      //     @font-face {
      //       font-family: 'Noto Sans KR';
      //       font-style: normal;
      //       font-display: swap;
      //       font-weight: 400;
      //       src: local(''),
      //         url(${NotoSansKRWoff2}) format('woff2'), /* Super Modern Browsers */
      //         url(${NotoSansKRWoff}) format('woff'), /* Modern Browsers */
      //         url(${NotoSansKRSvg}) format('svg'), /* Legacy iOS */
      //         url(${NotoSansKREot}) format('embedded-opentype'); /* IE Compat Modes */
      //     }
      //     @font-face {
      //       font-family: 'Noto Sans KR';
      //       font-style: normal;
      //       font-display: swap;
      //       font-weight: 500;
      //       src: local(''),
      //         url(${NotoSansKR500Woff2}) format('woff2'),
      //         url(${NotoSansKR500Woff}) format('woff'),
      //         url(${NotoSansKR500Svg}) format('svg'),
      //         url(${NotoSansKR500Eot}) format('embedded-opentype');
      //     }
      //     @font-face {
      //       font-family: 'Noto Sans KR';
      //       font-style: normal;
      //       font-display: swap;
      //       font-weight: 700;
      //       src: local(''),
      //         url(${NotoSansKR700Woff2}) format('woff2'),
      //         url(${NotoSansKR700Woff}) format('woff'),
      //         url(${NotoSansKR700Svg}) format('svg'),
      //         url(${NotoSansKR700Eot}) format('embedded-opentype');
      //     }
      //   `,
      // },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                '&:hover': {
                  backgroundColor: theme.palette.insurBlue[400],
                },
                '&:focus': {
                  backgroundColor: theme.palette.insurBlue[600],
                },
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' && {
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.insurBlue[400],
                  borderColor: theme.palette.insurBlue[400],
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  color: theme.palette.insurBlue[600],
                  borderColor: theme.palette.insurBlue[600],
                },
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'secondary' && {
                borderColor: theme.palette.blueGrey[300],
                color: theme.palette.grey[900],
                '&:hover': {
                  color: theme.palette.blueGrey[600],
                  borderColor: theme.palette.blueGrey[400],
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  borderColor: theme.palette.blueGrey[600],
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
    typography: {
      // fontFamily: ["'Noto Sans KR'", 'sans-serif'].join(','),
      button: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: '20px',
      },
    },
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
