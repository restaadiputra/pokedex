import React from 'react';
import { render } from '@testing-library/react';
import Container from '../container';

test('should render without error', () => {
  render(<Container />);
});
