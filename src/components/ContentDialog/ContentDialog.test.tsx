import React from 'react';
import { render } from '@testing-library/react';

import ContentDialog from './ContentDialog';

describe('ContentDialog', () => {
  test('renders the ContentDialog component', () => {
    render(
      <ContentDialog
        open={true}
        onClose={() => {}}
        title="제목"
        content={<div>컨텐츠</div>}
      />
    );
  });
});
