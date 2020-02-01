import React, { useState, useContext } from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import Input from '../Input';
import Group from '../Group';
import ApproveLink from '../ApproveLink';
import { AppStateContext, SET_SEARCH_WORD } from '../../appState';

const description = `Введите слово`;

function SearchTypePageFooter() {
  return <FooterLink to="/search">НАЗАД</FooterLink>;
}

function SearchTypePage() {
  const [appState, dispatch] = useContext(AppStateContext);
  const { searchWord: searchWordFromContext } = appState;
  const [searchWord, setSearchWord] = useState(searchWordFromContext);

  function handleApproveLinkClick() {
    dispatch({
      type: SET_SEARCH_WORD,
      payload: searchWord
    });
  }

  return (
    <Page description={description} footer={<SearchTypePageFooter />}>
      <Group vertical>
        <Input onChange={setSearchWord} value={searchWord} />
        <ApproveLink
          to="/photo/upload"
          onClick={handleApproveLinkClick}
          disabled={!searchWord}
        />
      </Group>
    </Page>
  );
}

export default SearchTypePage;
