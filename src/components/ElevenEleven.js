import React from 'react';
import { Link } from 'react-router-dom';


// Assets
import VidLanding1 from '../assets/landing/app-titan-eleven-eleven.mp4';
import '../assets/landing/styles.css';

export default function elevenEleven () {
  return (
    <Link to="/collections/adidas-basketball-chapter-03">
      <div className="py-2">
        <div className="video-container">
          <video className="full-screen-video" autoPlay loop muted>
  <source src={VidLanding1} type="video/mp4" />
</video>
        </div>
      </div>
    </Link>
  );
};