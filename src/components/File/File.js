import React, { useState, useRef, useEffect } from 'react';
import './File.css';

function File({ onChange, file: fileProp, label = '', className = '' }) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(fileProp);
  const totalClassName = ['file', className].join(' ');

  useEffect(
    function() {
      if (file && typeof onChange === 'function') {
        onChange(file);
      }
    },
    [file]
  );

  function handleChange() {
    setFile(fileRef.current.files[0]);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    fileRef.current.click();
  }

  return (
    <>
      <button
        type="button"
        className={totalClassName}
        onClick={handleButtonClick}
      >
        {label}
      </button>
      <input
        ref={fileRef}
        type="file"
        onChange={handleChange}
        className="file__origin"
      />
    </>
  );
}

export default File;
