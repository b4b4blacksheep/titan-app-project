import React, { useContext } from 'react';

import UserContext from '../UserContext';

import ElevenEleven from '../components/ElevenEleven.js';
import Landing from '../components/Landing';
import Adidas from '../components/Adidas';
import Banner from '../components/Banner';
import NewArrivals from '../components/NewArrivals.js';
import FeaturedCollections from '../components/FeaturedCollections.js';
import Sale from '../components/Sale.js';
import AdminPanel from '../components/AdminPanel';

import '../assets/home/styles.css';


export default function Home() {
  
  const { user } = useContext(UserContext);

  return (
    <div>
      {user.isAdmin ? (
        <AdminPanel data-aos="fade-up" />
      ) : (
        <>
          <div data-aos="fade-up"><ElevenEleven /></div>
          <div data-aos="fade-left"><NewArrivals /></div>
          <div data-aos="fade-up"><Landing /></div>
          <div data-aos="fade-right"><FeaturedCollections /></div>
          <div data-aos="fade-up"><Adidas /></div>
          <div data-aos="fade-right"><Sale /></div>
          <div data-aos="fade-zoom-in"><Banner /></div>
        </>
      )}
    </div>
  );
}
