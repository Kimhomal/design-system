import React from 'react';
import { render } from '@testing-library/react';

import MessageDialog from './MessageDialog';

describe('MessageDialog', () => {
  test('renders the MessageDialog component', () => {
    render(<MessageDialog open={true} onClose={() => {}} message="메시지" />);
  });
});
