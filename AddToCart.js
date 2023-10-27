import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import axios from 'axios';

import CustomBlkButton from '../components/CustomBlkButton';

import '../assets/product-view/styles.css';

const apiUrl = process.env.REACT_APP_API_URL;

const AddToCart = ({ selectedSize, productId, user }) => {
  const navigate = useNavigate();

  console.log({ selectedSize, productId, user })

  const enroll = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const body = {
        items: [
          {
            "productId": productId,
            "size": selectedSize
          }
        ],
      };

      const response = await axios.post(`${apiUrl}/cart/add-to-cart`, body, config);

      if (response.data) {
        Swal.fire({
          title: "Success!",
          text: "You have added the product to the cart successfully!"
        });
        navigate('/collections/shop-all');
      } else {
        Swal.fire({
          title: "Something went wrong!",
          text: "Please try again :("
        });
      }
    } catch (error) {
      console.error('Something went wrong:', error);
      Swal.fire({
        title: "Something went wrong!",
        text: "Please try again :("
      });
    }
  };

  return (
    <>
      <CustomBlkButton
        label="Add to cart"
        customClass="w-100"
        disabled={!selectedSize}
        onClick={enroll}
        variant="black"
      />
    </>
  );
};

export default AddToCart;
