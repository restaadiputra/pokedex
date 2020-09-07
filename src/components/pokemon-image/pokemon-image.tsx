import React from 'react';

interface Props {
  src: string;
  alt: string;
}

const PokemonImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="p-12 pt-8">
      <div className="relative" style={{ paddingBottom: '100%' }}>
        <img
          src={src}
          alt={alt}
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PokemonImage;
