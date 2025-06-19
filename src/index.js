import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Qrcode from '../src/component/Qrcode'
import "../src/component/QrCode.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Qrcode />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
