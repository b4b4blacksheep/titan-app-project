import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import axios from 'axios';

import UserContext from '../UserContext';
import CustomBlkButton from '../components/CustomBlkButton';

import '../assets/cart/styles.css';

const apiUrl = process.env.REACT_APP_API_URL;

const Cart = () => {
  const { user } = useContext(UserContext);
  const [ cart ] = useState("You haven't placed any orders yet.");
  const [ products, setProducts ] = useState({ items: [] });
  const [ totalQuantity, setTotalQuantity ] = useState(0);

  const [ subtotal, setSubtotal ] = useState(0);
  const [ shouldRefetch, setShouldRefetch ] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    const fetchData = async () => {
      try {
        //const response = await axios.get('http://localhost:8001/cart/get-cart', {
        const response = await axios.get(`${apiUrl}/cart/get-cart`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setProducts(response.data);
        setShouldRefetch(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [shouldRefetch]);


  const handleRemoveItem = async (itemId) => {
    const updatedItems = products.items.filter(item => item.productId?._id !== itemId);
    setProducts({ items: updatedItems });

    const token = localStorage.getItem('token');

    try {
      const response = await axios.delete(`${apiUrl}/cart/remove-item/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        setShouldRefetch(true);
      } else {
        throw new Error('Failed to remove item from server');
      }
    } catch (err) {
      console.error("There was a problem removing the item:", err);
    }
  };

  useEffect(() => {
     let totalQty = 0;
     if (products.items) {
       products.items.forEach(item => {
         totalQty += item.quantity;
       });
     }
     setTotalQuantity(totalQty);
   }, [products]);

  useEffect(() => {
    if (!user.id) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    let newSubtotal = 0;
    if (products.items) {
      products.items.forEach(item => {
        const onSaleValue = item.productId?.onSaleValue || item.productId?.price;
        if (onSaleValue) {
          newSubtotal += onSaleValue * item.quantity;
        }
      });
    }
    setSubtotal(newSubtotal);
  }, [products]);

  return (
    <Container>
      <div className="mb-4">
        <h1 className="cart-title text-center">
          Cart{totalQuantity > 0 ? `(${totalQuantity})` : ''}
        </h1>
      </div>
      <Row>
        <Col xs={12} md={9}>
          {products.items && products.items.length ? (
            products.items.map((item, index) => {
              const onSaleValue = item.productId?.onSaleValue;
              const originalPrice = item.productId?.price;
              return (
                <div key={index} className="card mb-3" style={{ maxWidth: '520px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Link to={`/products/${item.productId?._id}`} className="text-decoration-none">
                        <img src={item.productId.imageLinks[0]} className="img-fluid rounded-start" alt={item.productId?.name} />
                      </Link>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <MdClose 
                          style={{ cursor: 'pointer', float: 'right' }} 
                          onClick={() => handleRemoveItem(item._id)}
                        />
                        <Link to={`/products/${item.productId?._id}`} className="text-decoration-none">
                          <h4 className="cart-name text-dark pt-lg-4">{item.productId?.name}</h4>
                          <p className="cart-description">Size: {item.size}</p>
                          <p className="cart-description">Quantity: {item.quantity}</p>
                          {onSaleValue ? (
                            <div>
                              <span className="cart-description text-decoration-line-through text-danger">₱ {originalPrice.toLocaleString('en-US')}.00</span><br/>
                              <span className="cart-description">₱ {onSaleValue.toLocaleString('en-US')}.00</span>
                            </div>
                          ) : (
                            <p className="cart-description">₱ {originalPrice.toLocaleString('en-US')}.00</p>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="pb-5">{cart}</p>
          )}
        </Col>
        <Col xs={12} md={3} className="d-flex flex-column align-items-stretch">
          <div className="pb-5">
            <p className="pb-3 cart-subtotal d-flex">
              Subtotal: 
              <span className="cart-subtotal ms-auto">
                {subtotal === 0 ? '-' : `₱${subtotal.toLocaleString('en-US')}.00`}
              </span>
            </p>
            <CustomBlkButton 
              label={subtotal === 0 ? "Continue Shopping" : "Checkout"}
              onClick={() => navigate(subtotal === 0 ? '/' : '/checkout')}
              customClass="w-100"
              variant="black"
            />
          </div>
        </Col>
      </Row>
    </Container>


  );

};

export default Cart;