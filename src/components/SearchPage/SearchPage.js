import React from 'react';
import { faKeyboard, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Page from '../Page';
import Icon from '../Icon';
import Group from '../Group';

const description = `
        Вы имеете возможность вписать ввести слово или произнести его в микрофон
    `;

function SearchPage() {
  return (
    <Page description={description}>
      <Group>
        <Icon icon={faKeyboard} link="/search/type" />
        <Icon icon={faMicrophone} link="/search/micro" />
      </Group>
    </Page>
  );
}

export default SearchPage;
