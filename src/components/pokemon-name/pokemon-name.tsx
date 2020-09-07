import React from 'react';

import { capitalizeEachWord } from 'utils/formatter';

interface Props {
  id: string;
  name: string;
}

const PokemonName: React.FC<Props> = ({ id, name }) => {
  return (
    <h1 className="text-3xl text-white font-semibold tracking-wide">
      <span className="block text-base font-semibold">#{id}</span>
      {capitalizeEachWord(name)}
    </h1>
  );
};

export default PokemonName;
