import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element — check index.html.');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App statusOpen={true} heroPortrait={true} ambientMotion={true} />
  </React.StrictMode>
);
