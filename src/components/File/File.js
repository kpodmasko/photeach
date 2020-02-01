import React, { useState, useRef } from 'react';
import Group from '../Group';
import './File.css';

/**
 * TODO: change from file to image
 * TODO: refactor image config naming
 * TODO: check handleChange state setting
 */

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function File({ onChange, imageConfig }) {
  const { image, imageName } = imageConfig;
  const fileRef = useRef(null);
  // coma is needed as there is splitting in render
  const [file, setFile] = useState(image);
  const [fileName, setFileName] = useState(imageName);
  const isOnOnlyShowMode = !onChange;

  async function handleChange() {
    const fileConfig = fileRef.current.files[0];
    const fileWithBase64 = await toBase64(fileConfig);

    setFileName(fileConfig.name);
    setFile(fileWithBase64);
    onChange({
      image: fileWithBase64,
      imageName: fileConfig.name
    });
  }

  function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    fileRef.current.click();
  }

  return (
    <div className="file__container">
      <Group>
        {!isOnOnlyShowMode && (
          <div className="file__upload_button_container">
            <button
              type="button"
              className="file__upload_button"
              onClick={handleButtonClick}
            >
              Загрузить картинку
            </button>
          </div>
        )}
        {file.length > 1 && (
          <div className="file__uploaded_image_container">
            <img src={file} className="file__uploaded_image" alt={fileName} />
          </div>
        )}
      </Group>
      <input
        ref={fileRef}
        type="file"
        onChange={handleChange}
        className="file__native_item"
      />
    </div>
  );
}

export default File;
