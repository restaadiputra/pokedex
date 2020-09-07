import React from 'react';
import { render, screen } from '@testing-library/react';
import TextStats from '../text-stats';

test('should render the field and its value', () => {
  const { container, rerender } = render(
    <TextStats field="Height" value="100m" />
  );
  expect(screen.getByText('Height :')).toBeInTheDocument();
  expect(screen.getByText('100m')).toBeInTheDocument();
  expect(container).toMatchSnapshot();

  rerender(<TextStats field="Width" value="100kg" />);
  expect(screen.getByText('Width :')).toBeInTheDocument();
  expect(screen.getByText('100kg')).toBeInTheDocument();
});
