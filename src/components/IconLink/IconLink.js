import React from 'react';
import Link from '../Link';
import Icon from '../Icon';

function IconLink({ to, icon, iconStyle }) {
  return (
    <Link to={to} className="icon_link">
      <Icon icon={icon} style={iconStyle} />
    </Link>
  );
}

export default IconLink;
