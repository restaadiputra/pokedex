import React from 'react';

import TextStats from './text-stats';
import { capitalizeEachWord } from 'utils/formatter';

interface AreaProps {
  area: string;
}

const AreaStats: React.FC<AreaProps> = ({ area }) => {
  return (
    <div className="absolute top-0 left-0 transform rotate-90 origin-bottom-left -translate-y-4 -translate-x-1">
      <TextStats field="Region" value={capitalizeEachWord(area)} />
    </div>
  );
};

export default AreaStats;
