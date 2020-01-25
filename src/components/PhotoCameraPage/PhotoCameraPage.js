import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';

const description = `
        Сделайте фотографию
    `;

function PhotoCameraPageFooter() {
  return <FooterLink to="/photo">НАЗАД</FooterLink>;
}

function PhotoCameraPage() {
  return (
    <Page description={description} footer={<PhotoCameraPageFooter />}>
      CAMERA
    </Page>
  );
}

export default PhotoCameraPage;
