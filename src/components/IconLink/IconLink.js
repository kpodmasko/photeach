import React from 'react';
import Link from '../Link';
import Icon from '../Icon';

function IconLink({ to, icon, iconStyle, onClick }) {
  return (
    <Link to={to} className="icon_link" onClick={onClick}>
      <Icon icon={icon} style={iconStyle} />
    </Link>
  );
}

export default IconLink;
