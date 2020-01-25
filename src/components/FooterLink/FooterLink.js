import React from 'react';
import Link from '../Link';

function FooterLink({ disabled, to, children }) {
  const linkContainerStyle = { width: '90%' };
  const linkStyle = {
    padding: '15px 0',
    width: '100%',
    backgroundColor: '#0bf',
    color: '#fff',
    fontWeight: 'bold'
  };

  return (
    <Link
      disabled={disabled}
      to={to}
      containerStyle={linkContainerStyle}
      linkStyle={linkStyle}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
