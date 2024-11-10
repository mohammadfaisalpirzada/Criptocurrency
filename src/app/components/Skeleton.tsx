import React from 'react';

export const Skeleton: React.FC<{ className: string }> = ({ className }) => {
  return <div className={`bg-red-300 animate-pulse ${className}`} />;
};
