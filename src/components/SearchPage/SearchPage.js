import React from 'react';
import { faKeyboard, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import IconLink from '../IconLink';
import Group from '../Group';
import FooterLink from '../FooterLink';

const description = `
        Вы имеете возможность вписать ввести слово или произнести его в микрофон
    `;

function SearchPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function SearchPage() {
  return (
    <Page description={description} footer={<SearchPageFooter />}>
      <Group>
        <IconLink icon={faKeyboard} to="/search/type" />
        <IconLink
          icon={faMicrophone}
          to="/search/micro"
          onClick={e => e.preventDefault()}
        />
      </Group>
    </Page>
  );
}

export default SearchPage;
