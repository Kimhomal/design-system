import React from 'react';

import { render } from '@testing-library/react';

import ToggleChip from './ToggleChip';

describe('ToggleChip', () => {
  test('renders the ToggleChip component', () => {
    render(<ToggleChip value="value" />);
  });
});
