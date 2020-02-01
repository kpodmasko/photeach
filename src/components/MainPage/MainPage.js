import React, { useContext } from 'react';
import { faTextWidth, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Group from '../Group';
import FooterLink from '../FooterLink';
import IconLink from '../IconLink';
import Image from '../Image';
import { AppStateContext, initialAppState } from '../../appState';
import './MainPage.css';

const description = `
        Данное приложение позволяет искать слова по фотографии.\n
        Для этого требуется ввести слово и загрузить фотографию.\n
    `;

function MainPageFooter({ disabled }) {
  return (
    <FooterLink disabled={disabled} to="/result">
      ПОИСК
    </FooterLink>
  );
}

function MainPage() {
  const [appState] = useContext(AppStateContext);
  const { searchWord, searchImage } = appState;
  const { name: imageName, value: imageValue } = searchImage;
  const {
    name: initialImageName,
    value: initialImageValue
  } = initialAppState.searchImage;
  const hasSearchImage =
    `${imageName}${imageValue}` !== `${initialImageName}${initialImageValue}`;
  const hasSomeInfoForSearching = !!(searchWord || hasSearchImage);
  const hasAllInfoForSearching = !!(searchWord && hasSearchImage);

  return (
    <Page
      description={description}
      footer={<MainPageFooter disabled={!hasAllInfoForSearching} />}
    >
      <Group>
        <Group vertical>
          <IconLink icon={faTextWidth} to="/search/type" />
          <IconLink icon={faPhotoVideo} to="/photo/upload" />
        </Group>
        {hasSomeInfoForSearching ? (
          <Group vertical>
            <div className="main_page__info_container">
              <span className="main_page__search_word">{searchWord}</span>
            </div>
            <div className="main_page__info_container">
              <Image
                src={imageValue}
                alt={imageName}
                className="main_page__search_image"
              />
            </div>
          </Group>
        ) : (
          ''
        )}
      </Group>
    </Page>
  );
}

export default MainPage;
