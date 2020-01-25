import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';

const description = `
        Введите слово
    `;

function SearchTypePageFooter() {
  return <FooterLink to="/search">НАЗАД</FooterLink>;
}

function SearchTypePage() {
  return (
    <Page description={description} footer={<SearchTypePageFooter />}>
      INPUT
    </Page>
  );
}

export default SearchTypePage;
