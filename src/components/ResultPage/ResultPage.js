import React, { useContext, useEffect, useRef, useState } from 'react';
import Tesseract from 'tesseract.js';
import Page from '../Page';
import FooterLink from '../FooterLink';
import { AppStateContext, initialAppState } from '../../appState';
import RedirectToMain from '../RedirectToMain';
import Preloader from '../Preloader';
import Image from '../Image';
import './ResultPage.css';

const description = `Результат`;

function ResultPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function ResultPage() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [appState] = useContext(AppStateContext);
  const { searchWord, searchImage } = appState;
  const { name: imageName, value: imageValue } = searchImage;
  const {
    name: initialImageName,
    value: initialImageValue
  } = initialAppState.searchImage;
  const hasSearchImage =
    `${imageName}${imageValue}` !== `${initialImageName}${initialImageValue}`;
  const hasAllInfoForSearching = !!(searchWord && hasSearchImage);
  const [loading, setLoading] = useState(false);

  function markSearchWords(ocrResult) {
    const ioctx = canvasRef.current.getContext('2d');
    ioctx.drawImage(imgRef.current, 0, 0);

    ocrResult.words.forEach(function(w) {
      if (w.text !== searchWord) {
        return;
      }

      const b = w.bbox;

      ioctx.strokeWidth = 10;
      ioctx.fillStyle = 'rgba(0,0,0,0.5)';

      ioctx.strokeStyle = 'red';
      ioctx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
      ioctx.fillRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
      ioctx.beginPath();
      ioctx.moveTo(w.baseline.x0, w.baseline.y0);
      ioctx.lineTo(w.baseline.x1, w.baseline.y1);
      ioctx.strokeStyle = 'green';
      ioctx.stroke();
    });
  }

  useEffect(
    function() {
      (async function() {
        if (!searchWord || !searchImage) {
          return;
        }

        canvasRef.current.width = imgRef.current.width;
        canvasRef.current.height = imgRef.current.height;

        setLoading(true);

        const { data: ocrResult } = await Tesseract.recognize(
          imageValue,
          'eng'
        );
        markSearchWords(ocrResult);

        setLoading(false);
      })();
    },
    [searchWord, searchImage]
  );

  return (
    <>
      {loading && <Preloader />}
      {hasAllInfoForSearching ? (
        <Page description={description} footer={<ResultPageFooter />}>
          <canvas ref={canvasRef} />
          <Image
            ref={imgRef}
            className="result_page__image"
            src={imageValue}
            alt={imageName}
          />
        </Page>
      ) : (
        <RedirectToMain />
      )}
    </>
  );
}

export default ResultPage;
