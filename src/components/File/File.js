import React, { useState, useRef } from 'react';
import Group from '../Group';
import './File.css';

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function File() {
  const fileRef = useRef(null);
  // coma is needed as there is splitting in render
  const [file, setFile] = useState(',');
  const [fileName, setFileName] = useState('');

  async function handleChange() {
    const fileConfig = fileRef.current.files[0];
    const fileWithBase64 = await toBase64(fileConfig);

    setFileName(fileConfig.name);
    setFile(fileWithBase64);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    fileRef.current.click();
  }

  return (
    <div className="file__container">
      <Group>
        <div className="file__upload_button_container">
          <button
            type="button"
            className="file__upload_button"
            onClick={handleButtonClick}
          >
            Загрузить картинку
          </button>
        </div>
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
