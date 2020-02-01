import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

function ApproveLink(props) {
  const iconStyle = {
    borderColor: '#2cb824',
    backgroundColor: '#76de70'
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconLink {...props} icon={faCheck} iconStyle={iconStyle} />;
}

export default ApproveLink;
