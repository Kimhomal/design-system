import '@mui/material';
import '@mui/material/styles';
import React from 'react';

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

  interface TypographyVariants {
    header_b: React.CSSProperties;
    title_b: React.CSSProperties;
    subtitle_b: React.CSSProperties;
    subtitle_m: React.CSSProperties;
    subtitle_r: React.CSSProperties;
    body1_b: React.CSSProperties;
    body1_m: React.CSSProperties;
    body1_r: React.CSSProperties;
    body2_m: React.CSSProperties;
    body2_r: React.CSSProperties;
    caption1_m: React.CSSProperties;
    caption1_r: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header_b?: React.CSSProperties;
    title_b?: React.CSSProperties;
    subtitle_b?: React.CSSProperties;
    subtitle_m?: React.CSSProperties;
    subtitle_r?: React.CSSProperties;
    body1_b?: React.CSSProperties;
    body1_m?: React.CSSProperties;
    body1_r?: React.CSSProperties;
    body2_m?: React.CSSProperties;
    body2_r?: React.CSSProperties;
    caption1_m?: React.CSSProperties;
    caption1_r?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    header_b: true;
    title_b: true;
    subtitle_b: true;
    subtitle_m: true;
    subtitle_r: true;
    body1_b: true;
    body1_m: true;
    body1_r: true;
    body2_m: true;
    body2_r: true;
    caption1_m: true;
    caption1_r: true;
  }
}
