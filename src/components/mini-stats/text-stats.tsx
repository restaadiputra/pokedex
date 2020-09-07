import React from 'react';

interface Props {
  field: string;
  value: string;
}

const TextStats: React.FC<Props> = ({ field, value }) => {
  return (
    <p className="text-white tracking-wide text-sm opacity-75 font-light">
      <span className="font-normal">{field + ' : '}</span>
      {value}
    </p>
  );
};

export default TextStats;
