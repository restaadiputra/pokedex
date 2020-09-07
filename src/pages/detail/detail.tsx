import React from 'react';

import { Container } from 'components/layout';
import PokemonName from 'components/pokemon-name';
import MiniStats from 'components/mini-stats';
import PokemonImage from 'components/pokemon-image';
import imgExample from 'assets/images/example.png';

const Detail: React.FC = () => {
  return (
    <Container>
      <div className="w-full">
        <PokemonName id={'123'} name={'pokemon name'} />
      </div>
      <div className="flex flex-col min-h-screen">
        <MiniStats height="8.37m" weight="21.13kg" />
        <PokemonImage src={imgExample} alt="pokemon" />
        <div className="flex-1 bg-blue-300"></div>
      </div>
    </Container>
  );
};

export default Detail;
