import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';

const description = `
        Загрузите фотографию
    `;

function PhotoUploadPageFooter() {
  return <FooterLink to="/photo">НАЗАД</FooterLink>;
}

function PhotoUploadPage() {
  return (
    <Page description={description} footer={<PhotoUploadPageFooter />}>
      UPLOAD
    </Page>
  );
}

export default PhotoUploadPage;
