import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import UserContext from '../UserContext'

import ScrollToTop from './ScrollToTop'

import InnerImageZoom from 'react-inner-image-zoom'

import './style.css';

import Swal from 'sweetalert2'

import Sale from '../components/Sale';
// AddToCart.js
const AddToCart = (productId) => {

	const navigate = useNavigate()
	
	const [ itemId, setItemId ] = useState('');
	const [ userId, setUserId ] = useState('');
	const [ quantity, setQuantity ] = useState('');
	const [ size, setSize ] = useState('');

  // Your logic for adding to the cart
  // This will be executed when the button is clicked
	const enroll = (productId) => {

		
		//fetch(`${process.env.REACT_APP_API_URL}/orders/create-order`, {
		fetch(`http://localhost:8001/cart/add-to-cart`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				items: [
					{
						"productId": itemId,
						"quantity": quantity,
						"size": size,
						"userId": userId
					}
				]
			})
		})

		.then(response => response.json())
		.then(result => {

				if(result) {
					Swal.fire({
						title: "Success!",
						icon: "success",
						text: "You have order the product successfully!"
					})
					navigate('/')

				} else {

					Swal.fire({
						title: "Something went wrong!",
						icon: "error",
						text: "Please try again :("
					})
				}
			})
	}
};

export default AddToCart;