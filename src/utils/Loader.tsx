import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="rounded-2xl w-full">
      <div className="h-40 bg-gray-300 mb-8 shimmer rounded-xl"></div>
      <div className="h-2 w-20 bg-gray-300 mb-2 shimmer rounded"></div>
      <div className="h-4 bg-gray-300 mb-2 shimmer rounded"></div>
      <div className="h-4 bg-gray-300 mb-4 shimmer rounded"></div>
      <div className="flex gap-2">
        <div className="h-6 w-20 bg-gray-300 shimmer rounded-md"></div>
        <div className="h-6 w-20 bg-gray-300 shimmer rounded-md"></div>
      </div>
    </div>
  );
};

export default Loader;
