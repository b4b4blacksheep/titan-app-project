import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CustomBlkButton from '../components/CustomBlkButton';

import Breadcrumbs from '../components/Breadcrumb';

import '../assets/accessories/styles.css';

const Accessories = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ visibleCount, setVisibleCount ] = useState(16); // Track number of visible items

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Accessories', path: '/collections/accessories' },
  ];

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://localhost:8001/products/accessories')
      .then(response => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 16);
  };

  return (
    <Container>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="brandTitle" data-aos="fade-up">Accessories</h1>
      <Row className="pb-5">
        {isLoading ? (
          <div className="center-loading" data-aos="fade-up">Loading...</div>
        ) : error ? (
          <div className="center-loading" data-aos="fade-up">Error: {error.message}</div>
        ) : (
          products.slice(0, visibleCount).map((product, index) => (
            <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
              <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
                <div className="px-3" data-aos="fade-up">
                  <img 
                    className="img-fluid my-2" 
                    src={product.imageLinks[0]} 
                    alt={`${product.name} by ${product.brand}`} 
                  />
                  <h3 className="text-secondary brandName">{product.brand}</h3>
                  <h4 className="productDetails">{product.name}</h4>
                  {product.onSaleValue > 0 && (
                    <h5 className="productPrice text-danger">₱{product.onSaleValue.toLocaleString('en-US')}.00</h5>
                  )}
                  {
                    product.onSaleValue > 0 
                    ? <h6 className="productPrice"><del>₱{product.price.toLocaleString('en-US')}.00</del></h6> 
                    : <h5 className="productPrice">₱{product.price.toLocaleString('en-US')}.00</h5>
                  }
                </div>
              </Link>
            </Col>
          ))
        )}
      </Row>
      {!isLoading && !error && products.length > visibleCount && (
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <CustomBlkButton 
              label="Load more products" 
              customClass="button-blk" 
              onClick={loadMore}
              variant="black" 
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Accessories;