import React from 'react';
import { Link as RRDLink } from 'react-router-dom';
import './Link.css';

function Link({ to, children, disabled, containerStyle, linkStyle }) {
  const baseClassName = 'link';
  const disabledClassName = disabled ? `${baseClassName}--disabled` : ``;
  const hoverClassName = `${baseClassName}--hover`;
  const totalClassName = [
    baseClassName,
    disabledClassName,
    hoverClassName
  ].join(' ');

  return (
    <div className="link__container" style={containerStyle}>
      <RRDLink to={to} style={linkStyle} className={totalClassName}>
        {children}
      </RRDLink>
    </div>
  );
}

export default Link;
