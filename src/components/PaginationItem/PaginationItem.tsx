import React from 'react';

import {
  PaginationItem as MuiPaginationItem,
  paginationItemClasses,
  PaginationItemProps,
} from '@mui/material';

import ArrowBack from '../../icons/ArrowBack';
import ArrowFoward from '../../icons/ArrowForward';
import { grey } from '../../system/colors';
import typography from '../../system/typography';
import { deepmerge } from '../../utils';

const PaginationItem = (props: PaginationItemProps) => {
  const { sx, components, ...rest } = props;

  return (
    <MuiPaginationItem
      sx={deepmerge(
        {
          ...typography.body2_m,
          color: grey[400],
          [`&.${paginationItemClasses.previousNext}`]: {
            '& svg': {
              color: grey[600],
            },
            [`&.${paginationItemClasses.disabled}`]: {
              opacity: 1,
              '& svg': {
                color: grey[200],
              },
            },
          },
        },
        sx
      )}
      components={deepmerge(
        {
          previous: () => <ArrowBack sx={{ color: grey[600] }} />,
          next: () => <ArrowFoward sx={{ color: grey[600] }} />,
        },
        components
      )}
      {...rest}
    />
  );
};

export default PaginationItem;
