import React from 'react';

export const Card: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => {
  return <div className={`p-5 rounded-lg shadow-lg ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-14">{children}</div>;
};

export const CardTitle: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
