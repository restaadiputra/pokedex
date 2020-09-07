import React from 'react';

import { Container } from 'components/layout';
import PokemonName from 'components/pokemon-name';

interface TextProps {
  field: string;
  value: string;
}

interface AreaProps {
  area: string;
}

const TextStats: React.FC<TextProps> = ({ field, value }) => {
  return (
    <p className="text-white tracking-wide text-sm opacity-75 font-light">
      <span className="font-normal">{field + ' : '}</span>
      {value}
    </p>
  );
};

const RegionArea: React.FC<AreaProps> = ({ area }) => {
  return (
    <div className="absolute top-0 left-0 transform rotate-90 origin-bottom-left -translate-y-4 -translate-x-1">
      <TextStats field="Region" value={area} />
    </div>
  );
};

const Detail: React.FC = () => {
  return (
    <Container>
      <div className="w-full">
        <PokemonName id={'123'} name={'pokemon name'} />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="mb-4 bg-gray-700 relative">
          <RegionArea area={'Kanto'} />
          <div className="ml-16 mt-12">
            <TextStats field="Height" value="8.37m" />
            <TextStats field="Weight" value="21.13kg" />
          </div>
        </div>
        <div className="flex-1 bg-green-300"></div>
        <div className="flex-1 bg-blue-300"></div>
      </div>
    </Container>
  );
};

export default Detail;
