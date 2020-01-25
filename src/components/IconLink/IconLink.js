import React from 'react';
import Link from '../Link';
import Icon from '../Icon';

function IconLink({ to, icon }) {
  return (
    <Link to={to} className="icon_link">
      <Icon icon={icon} />
    </Link>
  );
}

export default IconLink;
