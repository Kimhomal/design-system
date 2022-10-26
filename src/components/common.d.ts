import { Theme } from '../system/createTheme/createTheme';

export type ThemeProps = {
  themeProps: Theme;
};

export interface OwnerStateProps<T> {
  ownerState: T & ThemeProps;
}
