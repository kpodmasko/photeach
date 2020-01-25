import React, { useContext } from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import { AppStateContext } from '../../appState';
import RedirectToMain from '../RedirectToMain';

const description = `
        Результат
    `;

function ResultPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function ResultPage() {
  const [appState] = useContext(AppStateContext);
  const { searchWord } = appState;

  return searchWord ? (
    <Page description={description} footer={<ResultPageFooter />}>
      RESULT
    </Page>
  ) : (
    <RedirectToMain />
  );
}

export default ResultPage;
