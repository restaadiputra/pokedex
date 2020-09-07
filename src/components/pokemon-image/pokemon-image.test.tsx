import React from 'react';
import { render } from '@testing-library/react';
import PokemonImage from './pokemon-image';

test('should render without error', () => {
  const { container } = render(
    <PokemonImage src="https://via.placeholder.com/150" alt="test" />
  );
  expect(container).toMatchSnapshot();
});
