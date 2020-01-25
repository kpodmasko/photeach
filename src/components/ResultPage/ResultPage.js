import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';

const description = `
        Результат
    `;

function ResultPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function ResultPage() {
  return (
    <Page description={description} footer={<ResultPageFooter />}>
      RESULT
    </Page>
  );
}

export default ResultPage;
