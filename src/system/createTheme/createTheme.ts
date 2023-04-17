import { deepmerge } from '../../utils';

import createPalette, { Palette, PaletteOptions } from './createPalette';
import createTypography, {
  Typography,
  TypographyOptions,
} from './createTypography';

export interface Theme {
  palette: Palette;
  typography: Typography;
}

export interface ThemeOptions {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
}

const createTheme = (options: ThemeOptions = {}): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    ...other
  } = options;

  const iuiTheme = deepmerge(
    {
      palette: createPalette(paletteInput),
      typography: createTypography(typographyInput),
    },
    other
  );

  return iuiTheme;
};

export default createTheme;
