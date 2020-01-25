import React from 'react';
import './Logo.css';
import LogoImg from '../../assets/images/logo.png';

function Logo() {
  return (
    <div className="logo__container">
      <img className="logo__item" src={LogoImg} alt="logo" />
    </div>
  );
}

export default Logo;
