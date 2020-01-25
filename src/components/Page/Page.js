import React from 'react';
import Logo from '../Logo';
import './Page.css';

function Page({ children }) {
  return (
    <div className="page__container">
      <div className="page__content">
        <Logo />
        {children}
      </div>
    </div>
  );
}

export default Page;
