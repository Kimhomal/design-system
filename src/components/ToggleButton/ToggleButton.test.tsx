import React from 'react';
import { render } from '@testing-library/react';

import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  test('renders the ToggleButton component', () => {
    render(<ToggleButton value="value" />);
  });
});
