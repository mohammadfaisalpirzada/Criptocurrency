import React from 'react';
export const Alert: React.FC<{ variant: string; className: string; children: React.ReactNode }> = ({ variant, className, children }) => {
  return (
    <div className={`alert ${variant} ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};
