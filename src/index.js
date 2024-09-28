import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Pages/Home';
import './Stylesheets/Styles.css';
import './Stylesheets/Desktop.css';
import './Stylesheets/Folder.css';
import './Stylesheets/About.css';
import './Stylesheets/Note.css';
import './Stylesheets/Media.css';
import './Stylesheets/Player.css';
import './Stylesheets/Sticky.css';
import './Stylesheets/Window.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
