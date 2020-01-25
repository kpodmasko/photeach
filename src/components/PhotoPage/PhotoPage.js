import React from 'react';
import { faCamera, faUpload } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import IconLink from '../IconLink';
import Group from '../Group';
import FooterLink from '../FooterLink';

const description = `
        Вы имеете возможность сделать фотографию или выбрать ее из галлереи
    `;

function PhotoPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function PhotoPage() {
  return (
    <Page description={description} footer={<PhotoPageFooter />}>
      <Group>
        <IconLink icon={faCamera} to="/photo/camera" />
        <IconLink icon={faUpload} to="/photo/upload" />
      </Group>
    </Page>
  );
}

export default PhotoPage;
