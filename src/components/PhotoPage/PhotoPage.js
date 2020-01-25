import React from 'react';
import { faCamera, faUpload } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Icon from '../Icon';
import Group from '../Group';

const description = `
        Вы имеете возможность сделать фотографию или выбрать ее из галлереи
    `;

function PhotoPage() {
  return (
    <Page description={description}>
      <Group>
        <Icon icon={faCamera} link="/photo/camera" />
        <Icon icon={faUpload} link="/photo/upload" />
      </Group>
    </Page>
  );
}

export default PhotoPage;
