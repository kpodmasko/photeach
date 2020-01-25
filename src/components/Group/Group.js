import React from 'react';
import './Group.css';

function Group({ children, vertical }) {
  const baseClassName = 'group__container';
  const directionClassName = vertical
    ? `${baseClassName}--vertical`
    : `${baseClassName}--horizontal`;
  const totalClassName = [baseClassName, directionClassName].join(' ');

  return <div className={totalClassName}>{children}</div>;
}

export default Group;
