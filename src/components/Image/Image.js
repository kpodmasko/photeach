import React from 'react';

function Image({ className = '', src = '', name = '' }) {
  const totalClassName = ['image', className].join(' ');

  return <img src={src} className={totalClassName} alt={name} />;
}

export default Image;
