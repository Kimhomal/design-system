import React from 'react';

import { render } from '@testing-library/react';

import PaginationItem from './PaginationItem';

describe('PaginationItem', () => {
  test('renders the PaginationItem component', () => {
    render(<PaginationItem />);
  });
});
