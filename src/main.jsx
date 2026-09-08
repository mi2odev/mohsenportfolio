import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import './fonts.css';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element — check index.html.');

const app = (
  <React.StrictMode>
    <ErrorBoundary>
      <App statusOpen={true} heroPortrait={true} ambientMotion={true} />
    </ErrorBoundary>
  </React.StrictMode>
);

// The build prerenders the page into #root, so hydrate it in place. If that
// step was skipped, there is nothing to hydrate and we mount normally.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
