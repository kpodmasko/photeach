import React, { useContext, useState } from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import File from '../File';
import Group from '../Group';
import ApproveLink from '../ApproveLink';
import { AppStateContext, SET_SEARCH_IMAGE } from '../../appState';

/**
 * TODO: check after other completing
 */

const description = `
        Загрузите фотографию
    `;

function PhotoUploadPageFooter() {
  return <FooterLink to="/photo">НАЗАД</FooterLink>;
}

function PhotoUploadPage() {
  const [appState, dispatch] = useContext(AppStateContext);
  const { searchImage } = appState;
  const [image, setImage] = useState(searchImage);

  function handleFileChange(imageConfig) {
    setImage(imageConfig);
  }

  function handleApproveLinkClick(event) {
    if (image) {
      dispatch({
        type: SET_SEARCH_IMAGE,
        payload: image
      });
    } else {
      // cancel redirect to photo selecting
      event.preventDefault();
    }
  }

  return (
    <Page description={description} footer={<PhotoUploadPageFooter />}>
      <Group vertical>
        <File onChange={handleFileChange} imageConfig={image} />
        <ApproveLink to="/main" onClick={handleApproveLinkClick} />
      </Group>
    </Page>
  );
}

export default PhotoUploadPage;
