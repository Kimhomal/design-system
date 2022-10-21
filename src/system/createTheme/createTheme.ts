import { deepmerge } from '../../utils';
import createTypography, {
  Typography,
  TypographyOptions,
} from './createTypography';

export interface ThemeOptions {
  typography?: TypographyOptions;
}

export interface Theme {
  typography: Typography;
}

const createTheme = (options: ThemeOptions = {}): Theme => {
  const { typography: typographyInput = {}, ...other } = options;

  let iuiTheme = deepmerge(
    { typography: createTypography(typographyInput) },
    other
  );

  return iuiTheme;
};

export default createTheme;
