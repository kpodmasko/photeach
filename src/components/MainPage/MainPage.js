import React, { useContext } from 'react';
import { faTextWidth, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Group from '../Group';
import FooterLink from '../FooterLink';
import IconLink from '../IconLink';
import { AppStateContext } from '../../appState';
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
  const { searchWord } = appState;

  return (
    <Page
      description={description}
      footer={<MainPageFooter disabled={!searchWord} />}
    >
      <Group>
        <Group vertical>
          <IconLink icon={faTextWidth} to="/search" />
          <IconLink icon={faPhotoVideo} to="/photo" />
        </Group>
        {searchWord ? (
          <Group vertical>
            <div className="main_page__search_word_container">
              <span className="main_page__search_word">{searchWord}</span>
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
