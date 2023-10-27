import React from 'react';
import { Link } from 'react-router-dom';
// Components
import CustomBlkButton from '../components/CustomBlkButton';
// Assets
import VidLanding1 from '../assets/landing/app-titan-landing-video.mp4';
import '../assets/landing/styles.css';

const LandingPage = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={VidLanding1} type="video/mp4" />
      </video>
      <div className="content text-center text-uppercase">
        <h1>Nike Lebron NXXT Gen 'Titan Hoops Fair'</h1>
        <p>For the NXXT generation. For the love of the game.</p>
        <Link to="/collections/shop-all" className="px-5">
          <CustomBlkButton 
            label="Shop Now" 
            customClass="button-blk"
            variant="black" 
          />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;