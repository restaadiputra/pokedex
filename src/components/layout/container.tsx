import React from 'react';

const Container: React.FC = ({ children }) => {
  return (
    <main className="bg-gray-700 font-nunito">
      <div className="container mx-auto">
        <div className="w-full p-4">{children}</div>
      </div>
    </main>
  );
};

export default Container;
