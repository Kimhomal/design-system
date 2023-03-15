import { deepmerge } from '../../utils';

export interface Palette {
  mode: PaletteMode;
  primary: PaletteColor;
  status: StatusColor;
}

export interface PaletteColor {
  main: string;
}

export type PaletteMode = 'admin' | 'self';

export type PaletteOptions = Partial<Palette>;

export interface StatusColor {
  error: string;
}

function getDefaultPrimary(mode: PaletteMode = 'admin'): PaletteColor {
  if (mode === 'admin') {
    return {
      main: '#3B69E6',
    };
  }

  if (mode === 'self') {
    return {
      main: '#007340',
    };
  }

  return {
    main: '#3B69E6',
  };
}

function getDefaultStatus(mode: PaletteMode = 'admin'): StatusColor {
  if (mode === 'admin') {
    return {
      error: '#ff0400',
    };
  }

  if (mode === 'self') {
    return {
      error: '#E42C2C',
    };
  }

  return {
    error: '#ff0400',
  };
}

const createPalette = (palette: PaletteOptions): Palette => {
  const { mode = 'admin', ...other } = palette;

  const primary = palette.primary || getDefaultPrimary(mode);
  const status = palette.status || getDefaultStatus(mode);

  return deepmerge({ mode, primary, status }, other);
};

export default createPalette;
