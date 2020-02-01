import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';

function Icon({ icon, style, className }) {
  const classNameBase = 'icon__container';
  const classNameHover = `${classNameBase}--hover`;
  const totalClassName = [className, classNameBase, classNameHover].join(' ');

  return (
    <div className={totalClassName} style={style}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default Icon;
