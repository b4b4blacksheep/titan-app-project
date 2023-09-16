import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';

import VidLanding1 from '../assets/landing/app-titan-landing-video.mp4';

import '../assets/landing/styles.css';

const LandingPage = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={VidLanding1} type="video/mp4" />
      </video>
      <div className="content text-center">
        <h1>NIKE LEBRON NXXT GEN 'TITAN HOOPS FAIR'</h1>
        <p>FOR THE NXXT GENERATION. FOR LOVE OF THE GAME.</p>
        <Link to="/products" className="btn btn-dark px-5" id="submitBtn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

