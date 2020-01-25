import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';

const description = `
        Произнесите слово
    `;

function SearchMicroPageFooter() {
  return <FooterLink to="/search">НАЗАД</FooterLink>;
}

function SearchMicroPage() {
  return (
    <Page description={description} footer={<SearchMicroPageFooter />}>
      MICRO
    </Page>
  );
}

export default SearchMicroPage;
