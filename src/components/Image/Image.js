import React, { forwardRef } from 'react';

const Image = forwardRef(({ className = '', src = '', alt = '' }, ref) => {
  const totalClassName = ['image', className].join(' ');

  return <img src={src} className={totalClassName} alt={alt} ref={ref} />;
});

export default Image;
