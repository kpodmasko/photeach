import React from 'react';
import Logo from '../Logo';
import './Page.css';

function Page({ children, description, footer }) {
  return (
    <div className="page__container">
      <div className="page__content">
        <Logo />
        <div className="page__description_container">
          <p className="page__description">{description}</p>
        </div>
        <div className="page__main">{children}</div>
        <div className="page__footer">{footer}</div>
      </div>
    </div>
  );
}

export default Page;
