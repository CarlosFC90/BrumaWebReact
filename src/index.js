import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Images
import Background from "./images/background.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<img src={Background} alt="Background"/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
