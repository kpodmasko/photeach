import React from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import Input from '../Input';
import Group from '../Group';
import ApproveLink from '../ApproveLink';

const description = `
        Введите слово
    `;

function SearchTypePageFooter() {
  return <FooterLink to="/search">НАЗАД</FooterLink>;
}

function SearchTypePage() {
  return (
    <Page description={description} footer={<SearchTypePageFooter />}>
      <Group vertical>
        <Input />
        <ApproveLink to="/photo" />
      </Group>
    </Page>
  );
}

export default SearchTypePage;
