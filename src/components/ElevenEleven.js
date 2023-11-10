import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VidLanding1 from '../assets/landing/app-titan-eleven-eleven.mp4';
import VidLanding2 from '../assets/landing/app-titan-eleven-eleven-sm.mp4';
import '../assets/landing/styles.css';

export default function ElevenEleven() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Link to="/collections/adidas-basketball-chapter-03">
      <div className="py-2">
        <div className="video-container">
          {isSmallScreen ? (
            <video className="full-screen-video" autoPlay loop muted>
              <source src={VidLanding2} type="video/mp4" />
            </video>
          ) : (
            <video className="full-screen-video" autoPlay loop muted>
              <source src={VidLanding1} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </Link>
  );
}
