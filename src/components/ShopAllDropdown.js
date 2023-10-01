import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/shop-all-dropdown/styles.css';

const ShopAllDropdown = () => {
  return (
    <div className="shop-all-dropdown">
      <div className="dropdown-content">
        <Link to="/collections/footwear">Footwear</Link>
        <Link to="/collections/apparel">Apparel</Link>
        <Link to="/collections/performance">Performance</Link>
        <Link to="/collections/men">Men</Link>
        <Link to="/collections/women">Women</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default ShopAllDropdown;