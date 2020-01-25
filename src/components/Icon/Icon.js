import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Icon.css';

function Icon({ icon, link }) {
  return (
    <div className="icon__container icon__container--hover">
      {link ? (
        <Link to={link} className="icon__link">
          <FontAwesomeIcon icon={icon} />
        </Link>
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
    </div>
  );
}

export default Icon;
