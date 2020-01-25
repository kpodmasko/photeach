import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';

function Icon({ icon, style }) {
  return (
    <div className="icon__container icon__container--hover" style={style}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default Icon;
