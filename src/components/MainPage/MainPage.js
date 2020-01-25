import React from 'react';
import { faTextWidth, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Icon from '../Icon';
import Group from '../Group';

const description = `
        Данное приложение позволяет искать слова по фотографии.\n
        Для этого требуется ввести слово и загрузить фотографию.\n
    `;

function MainPage() {
  return (
    <Page description={description}>
      <Group vertical>
        <Icon icon={faTextWidth} link="/search" />
        <Icon icon={faPhotoVideo} link="/photo" />
      </Group>
    </Page>
  );
}

export default MainPage;
