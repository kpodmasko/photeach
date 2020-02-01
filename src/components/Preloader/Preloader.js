import React from 'react';
import { createPortal } from 'react-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import './Preloader.css';

function Preloader() {
  return createPortal(
    <div className="preloader">
      <Icon icon={faSpinner} className="preloader__icon" />
    </div>,
    document.getElementById('preloader')
  );
}

export default Preloader;
