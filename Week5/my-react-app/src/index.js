// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Used for React 18
import './index.css';  // Default styles (you can modify it)
import App from './App';  // The main app component

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
