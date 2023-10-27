import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';

// Import Styles
import '../assets/admin-panel/styles.css';

const NewArrivals = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/new-arrivals`);
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <Container>
      <h1 className="loginTitle pt-5">New Arrivals<Link to="/collections/shop-all" className="viewAll px-3">View All →</Link></h1>
      <Row className="pb-5">
        {isLoading ? (
          <div className="center-loading">Loading...</div>
        ) : error ? (
          <div className="center-loading">Loading...</div>
        ) : (
          products.slice(0, 8).map((product, index) => (
            <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
              <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
                <div className="px-3">
                  <img className="img-fluid my-2" src={product.imageLinks[0]} alt={`Logo ${index + 1}`} />
                  <h3 className="text-secondary brandName">{product.brand}</h3>
                  <h5 className="productDetails">{product.name}</h5>
                  <h5 className="productPrice">₱{product.price.toLocaleString('en-US')}.00</h5>
                </div>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default NewArrivals;