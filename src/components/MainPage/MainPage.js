import React from 'react';
import { faTextWidth, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Group from '../Group';
import FooterLink from '../FooterLink';
import IconLink from '../IconLink';

const description = `
        Данное приложение позволяет искать слова по фотографии.\n
        Для этого требуется ввести слово и загрузить фотографию.\n
    `;

function MainPageFooter() {
  return <FooterLink to="/result">ПОИСК</FooterLink>;
}

function MainPage() {
  return (
    <Page description={description} footer={<MainPageFooter />}>
      <Group vertical>
        <IconLink icon={faTextWidth} to="/search" />
        <IconLink icon={faPhotoVideo} to="/photo" />
      </Group>
    </Page>
  );
}

export default MainPage;
