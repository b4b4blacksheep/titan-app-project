import { Link } from 'react-router-dom';

import React from 'react';

import VidLanding0 from '../assets/adidas/app-titan-adidas-video.mp4';

import '../assets/adidas/styles.css'

const Adidas = () => {
	return (
	  <Link to="/collections/adidas-basketball-chapter-03">
	    <div className="py-2">
	      <div className="video-container">
	        <video autoPlay loop muted className="background-video-adidas">
	          <source src={VidLanding0} type="video/mp4" />
	        </video>
	      </div>
	    </div>
	  </Link>
	);
};

export default Adidas;