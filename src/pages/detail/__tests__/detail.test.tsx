import React from 'react';
import { render } from '@testing-library/react';
import Detail from '../detail';

describe('detail page', () => {
  test('should render without error', () => {
    render(<Detail />);
  });
});
