import React from 'react';
import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  test('renders the TextField component', () => {
    render(<TextField variant="outlined" defaultValue="Hello World" />);
  });
});
