import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

function ApproveLink({ to, onClick }) {
  const iconStyle = {
    borderColor: '#2cb824',
    backgroundColor: '#76de70'
  };

  return (
    <IconLink iconStyle={iconStyle} to={to} icon={faCheck} onClick={onClick} />
  );
}

export default ApproveLink;
