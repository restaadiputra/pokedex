import React from 'react';

import TextStats from './text-stats';
import AreaStats from './area-stats';

interface Props {
  area?: string;
  height: string;
  weight: string;
}

const MiniStats: React.FC<Props> = ({ area = 'Kanto', height, weight }) => {
  return (
    <div className="mb-4 bg-gray-700 relative">
      <AreaStats area={area} />
      <div className="ml-16 mt-12">
        <TextStats field="Height" value={height} />
        <TextStats field="Weight" value={weight} />
      </div>
    </div>
  );
};

export default MiniStats;
