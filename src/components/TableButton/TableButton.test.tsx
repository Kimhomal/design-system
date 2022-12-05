import React from 'react';
import { render } from '@testing-library/react';

import TableButton from './TableButton';

describe('TableButton', () => {
  test('renders the TableButton component', () => {
    render(<TableButton>테이블 버튼</TableButton>);
  });
});
