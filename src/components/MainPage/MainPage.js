import React, { useContext } from 'react';
import { faTextWidth, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Group from '../Group';
import FooterLink from '../FooterLink';
import IconLink from '../IconLink';
import File from '../File';
import { AppStateContext, initialAppState } from '../../appState';
import './MainPage.css';

const description = `
        Данное приложение позволяет искать слова по фотографии.\n
        Для этого требуется ввести слово и загрузить фотографию.\n
    `;

/**
 * TODO: check after other completing
 */

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
  const { image, imageName } = searchImage;
  const {
    image: initialImage,
    imageName: initialImageName
  } = initialAppState.searchImage;
  const hasSearchImage = true;
  // `${image}${imageName}` !== `${initialImage}${initialImageName}`;
  const hasSomeInfoForSearching = !!(searchWord || hasSearchImage);
  const hasAllInfoForSearching = !!(searchWord && hasSearchImage);

  return (
    <Page
      description={description}
      footer={<MainPageFooter disabled={!hasAllInfoForSearching} />}
    >
      <Group>
        <Group vertical>
          <IconLink icon={faTextWidth} to="/search" />
          <IconLink icon={faPhotoVideo} to="/photo" />
        </Group>
        {hasSomeInfoForSearching ? (
          <Group vertical>
            <div className="main_page__search_word_container">
              <span className="main_page__search_word">{searchWord}</span>
            </div>
            <div className="main_page__search_word_container">
              <span className="main_page__search_word">
                <File imageConfig={searchImage} />
              </span>
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
