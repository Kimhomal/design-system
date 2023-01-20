import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  inputClasses,
  inputBaseClasses,
  outlinedInputClasses,
  InputAdornment,
} from '@mui/material';
import { blueGrey, grey, insurBlue, lineGrey, red } from '../../system/colors';
import { deepmerge } from '../../utils';
import Search from '../../icons/Search';

type TextFieldProps = MuiTextFieldProps & { showSearchIcon?: boolean };

const TextField = (props: TextFieldProps) => {
  const {
    type,
    InputProps,
    showSearchIcon,
    inputProps,
    FormHelperTextProps,
    ...rest
  } = props;
  const {
    sx: InputPropsSx,
    startAdornment: InputPropsStartAdornment,
    ...InputPropsRest
  } = InputProps || {};
  const { sx: inputPropsSx, ...inputPropsRest } = inputProps || {};
  const { sx: FormHelperTextPropsSx, ...FormHelperTextPropsRest } =
    FormHelperTextProps || {};

  return (
    <MuiTextField
      type={type || 'search'}
      InputProps={{
        sx: deepmerge(
          {
            height: 42,
            borderRadius: 0,
            [`.${outlinedInputClasses.notchedOutline}`]: {
              borderColor: lineGrey[200],
            },
            [`.${inputBaseClasses.input}::placeholder`]: {
              color: grey[200],
              opacity: 1,
            },
            '&&:hover': {
              [`.${outlinedInputClasses.notchedOutline}`]: {
                borderColor: lineGrey[200],
              },
            },
            [`&&.${inputClasses.focused}`]: {
              [`.${outlinedInputClasses.notchedOutline}`]: {
                border: `1px solid ${insurBlue[500]}`,
              },
              [`.${inputBaseClasses.input}::placeholder`]: {
                visibility: 'hidden',
              },
            },
            [`&&.${inputClasses.error}`]: {
              [`.${outlinedInputClasses.notchedOutline}`]: {
                borderColor: red[500],
              },
            },
            [`&&.${inputClasses.disabled}`]: {
              backgroundColor: blueGrey[100],
              color: blueGrey[400],
              [`.${outlinedInputClasses.notchedOutline}`]: {
                borderColor: lineGrey[200],
              },
            },
          },
          InputPropsSx
        ),
        startAdornment: showSearchIcon ? (
          <InputAdornment position="start" sx={{ marginRight: '4px' }}>
            <Search sx={{ color: grey[900] }} />
          </InputAdornment>
        ) : (
          InputPropsStartAdornment
        ),
        ...InputPropsRest,
      }}
      inputProps={{
        sx: deepmerge(
          {
            padding: '11px 10px',
            [`&::-webkit-search-decoration,
              &::-webkit-search-cancel-button,
              &::-webkit-search-results-button,
              &::-webkit-search-results-decoration`]: {
              /* Remove default */
              WebkitAppearance: 'none',
            },
            '&:hover, &:focus': {
              [`&::-webkit-search-decoration,
                &::-webkit-search-cancel-button,
                &::-webkit-search-results-button,
                &::-webkit-search-results-decoration`]: {
                width: 20,
                height: 20,
                backgroundImage: clearButtonSvgUrl,
                cursor: 'pointer',
              },
            },
            '&:disabled': {
              [`&::-webkit-search-decoration,
                &::-webkit-search-cancel-button,
                &::-webkit-search-results-button,
                &::-webkit-search-results-decoration`]: {
                display: 'none',
              },
            },
          },
          inputPropsSx
        ),
        ...inputPropsRest,
      }}
      FormHelperTextProps={{
        sx: deepmerge(
          {
            marginTop: '4px',
            marginInline: 0,
          },
          FormHelperTextPropsSx
        ),
        ...FormHelperTextPropsRest,
      }}
      {...rest}
    />
  );
};

export default TextField;

const urlEncodedColor = encodeURIComponent(grey[400]);
const clearButtonSvgUrl = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 4.67611L15.324 3.33325L10.0002 8.65706L4.67635 3.33325L3.3335 4.67611L8.65731 9.99992L3.3335 15.3237L4.67635 16.6666L10.0002 11.3428L15.324 16.6666L16.6668 15.3237L11.343 9.99992L16.6668 4.67611Z" fill="${urlEncodedColor}"/></svg>')`;
