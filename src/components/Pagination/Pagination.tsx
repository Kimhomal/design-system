import React from 'react';
import {
  Pagination as MuiPagination,
  paginationClasses,
  paginationItemClasses,
  PaginationProps,
} from '@mui/material';
import PaginationItem from '../PaginationItem';
import { deepmerge } from '../../utils';

const Pagination = (props: PaginationProps) => {
  const { sx, ...rest } = props;

  return (
    <MuiPagination
      sx={deepmerge(
        {
          [`.${paginationClasses.ul}`]: {
            gap: '16px',
          },
          [`& .${paginationItemClasses.root}`]: {
            width: 32,
            margin: 0,
            padding: 0,
          },
        },
        sx
      )}
      renderItem={(item) => <PaginationItem {...item} />}
      {...rest}
    />
  );
};

export default Pagination;
