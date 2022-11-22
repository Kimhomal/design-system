import React from 'react';
import { render } from '@testing-library/react';

import Chip from './Chip';

describe('Chipt', () => {
  test('renders the Chipt component', () => {
    render(<Chip label="label" />);
  });
});
