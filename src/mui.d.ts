import '@mui/material';
import '@mui/material/styles';

declare module '@mui/material' {
  interface Color {
    150: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    lineGrey: Palette['grey'];
    blueGrey: Palette['grey'];
    insurBlue: Palette['grey'];
    red: Palette['grey'];
  }

  interface PaletteOptions {
    lineGrey?: PaletteOptions['grey'];
    blueGrey?: PaletteOptions['grey'];
    insurBlue?: PaletteOptions['grey'];
    red?: PaletteOptions['grey'];
  }
}
