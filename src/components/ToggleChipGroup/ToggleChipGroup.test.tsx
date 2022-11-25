import React from 'react';
import { render } from '@testing-library/react';

import ToggleChipGroup from './ToggleChipGroup';

describe('ToggleChipGroup', () => {
  test('renders the ToggleChipGroup component', () => {
    render(<ToggleChipGroup value="value" />);
  });
});
