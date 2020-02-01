import React, { useContext, useEffect, useRef } from 'react';
import { createWorker } from 'tesseract.js';
import Page from '../Page';
import FooterLink from '../FooterLink';
import { AppStateContext } from '../../appState';
import RedirectToMain from '../RedirectToMain';

const description = `
        Результат
    `;

function ResultPageFooter() {
  return <FooterLink to="/">НАЗАД</FooterLink>;
}

function ResultPage() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [appState] = useContext(AppStateContext);
  const {
    searchWord,
    searchImage: { image }
  } = appState;

  function resultData(res) {
    const ioctx = canvasRef.current.getContext('2d');
    ioctx.drawImage(imgRef.current, 0, 0);
    res.words.forEach(function(w) {
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
  useEffect(() => {
    canvasRef.current.width = imgRef.current.width;
    canvasRef.current.height = imgRef.current.height;

    const worker = createWorker({
      logger: m => console.log(m)
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const res = await worker.recognize(image);
      console.log(res);
      const { data } = res;

      resultData(data);
      await worker.terminate();
    })();
  }, []);

  return searchWord ? (
    <Page description={description} footer={<ResultPageFooter />}>
      <canvas
        ref={canvasRef}
        style={{
          marginTop: '0',
          // position: 'absolute',
          maxWidth: '100%',
          boxSizing: 'border-box'
          // padding: '20px'
        }}
      />
      <img
        ref={imgRef}
        src={image}
        style={{
          maxWidth: '100%',
          boxSizing: 'border-box',
          // padding: '20px',
          marginTop: '0',
          border: '1px solid #ddd',
          display: 'none'
        }}
      />
    </Page>
  ) : (
    <RedirectToMain />
  );
}

export default ResultPage;
