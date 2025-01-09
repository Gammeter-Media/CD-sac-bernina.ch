import React from 'react';

const Primary = ({ color, className, children }) => {
  return (
    <div style={{ backgroundColor: color }} className={className}>
      {children}
    </div>
  );
};

export default Primary;
