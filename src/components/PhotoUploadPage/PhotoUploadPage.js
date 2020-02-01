import React, { useContext, useState } from 'react';
import Page from '../Page';
import FooterLink from '../FooterLink';
import File from '../File';
import Image from '../Image';
import Group from '../Group';
import ApproveLink from '../ApproveLink';
import { AppStateContext, SET_SEARCH_IMAGE } from '../../appState';
import { toBase64 } from '../../helpers';
import './PhotoUploadPage.css';

const description = `Загрузите фотографию`;

function PhotoUploadPageFooter() {
  return <FooterLink to="/photo">НАЗАД</FooterLink>;
}

function PhotoUploadPage() {
  const [appState, dispatch] = useContext(AppStateContext);
  const { searchImage } = appState;
  const [image, setImage] = useState(searchImage);
  const { name, value, origin } = image;
  const isUploaded = value.length > 1;

  async function handleFileChange(file) {
    const { name: newName } = file;
    const newValue = await toBase64(file);

    setImage({ name: newName, value: newValue, origin: file });
  }

  function handleApproveLinkClick() {
    dispatch({
      type: SET_SEARCH_IMAGE,
      payload: image
    });
  }

  return (
    <Page description={description} footer={<PhotoUploadPageFooter />}>
      <Group vertical>
        <File
          className="photo_upload_page__file"
          onChange={handleFileChange}
          file={origin}
          label="Загрузить картинку"
        />
        <Image src={value} name={name} className="photo_upload_page__image" />
        <ApproveLink
          to="/main"
          onClick={handleApproveLinkClick}
          disabled={!isUploaded}
        />
      </Group>
    </Page>
  );
}

export default PhotoUploadPage;
