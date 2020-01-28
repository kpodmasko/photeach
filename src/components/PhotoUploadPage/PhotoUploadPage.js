import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import File from '../File';
import Group from '../Group';
import ApproveLink from '../ApproveLink';

const description = `
        Загрузите фотографию
    `;

function PhotoUploadPageFooter() {
  return <FooterLink to="/photo">НАЗАД</FooterLink>;
}

function PhotoUploadPage() {
  return (
    <Page description={description} footer={<PhotoUploadPageFooter />}>
      <Group vertical>
        <File />
        <ApproveLink />
      </Group>
    </Page>
  );
}

export default PhotoUploadPage;
