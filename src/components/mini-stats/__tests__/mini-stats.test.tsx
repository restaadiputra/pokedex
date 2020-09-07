import React from 'react';
import { render, screen } from '@testing-library/react';
import MiniStats from '../mini-stats';

test('should render the area with capitalize on first letter', () => {
  const { container } = render(<MiniStats height="100m" weight="100kg" />);
  expect(screen.getByText('Kanto')).toBeInTheDocument();
  expect(screen.getByText('100m')).toBeInTheDocument();
  expect(screen.getByText('100kg')).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
