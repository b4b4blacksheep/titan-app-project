import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebFont from 'webfontloader';

// Initialize AOS
AOS.init();

// Load fonts using Web Font Loader
WebFont.load({
  google: {
    families: ['Bebas Neue', 'Oswald:900']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
