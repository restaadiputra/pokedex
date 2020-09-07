import React from 'react';
import { render, screen } from '@testing-library/react';
import AreaStats from '../area-stats';

test('should render the area with capitalize on first letter', () => {
  render(<AreaStats area="kanto" />);
  expect(screen.getByText('Kanto')).toBeInTheDocument();
  expect(screen.getByText('Kanto')).toMatchSnapshot();
});
