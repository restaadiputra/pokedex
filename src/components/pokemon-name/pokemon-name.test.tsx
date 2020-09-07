import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonName from './pokemon-name';

describe('PokemonName component', () => {
  test('should render with given name and id', () => {
    const { rerender } = render(<PokemonName id="1" name="bulbasaur" />);
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    
    rerender(<PokemonName id="2" name="ivysaur" />);
    expect(screen.getByText('#2')).toBeInTheDocument();
    expect(screen.getByText("Ivysaur")).toBeInTheDocument();
  });
});
