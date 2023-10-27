import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footwear = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Get token from local storage
      const token = localStorage.getItem('token');

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/footwear/all`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);

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
      <h1 className="pt-5 text-center">View All Footwear</h1>
      <Row className="pb-5">
        {isLoading ? (
          <div className="center-loading">Loading...</div>
        ) : error ? (
          <div className="center-loading">Loading...</div>
        ) : (
          products.slice(0, 16).map((product, index) => (
          	<Col key={product._id} xs={12} sm={12} md={6} lg={4}>
          	  <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
          	    <div className="homeHighlight px-3 highlight1">
          	      <img 
          	        className="img-fluid my-2" 
          	        src={product.imageLinks[0]} 
          	        alt={`${product.name} by ${product.brand}`} 
          	      />
          	      <h3 className="text-secondary">{product.brand}</h3>
          	      <h4>{product.name}</h4>
          	      
          	      {product.onSaleValue > 0 && (
          	        <h5 className="text-danger">₱{product.onSaleValue.toLocaleString('en-US')}.00</h5>
          	      )}
          	      {
          	        product.onSaleValue > 0 
          	        ? <h6><del>₱{product.price.toLocaleString('en-US')}.00</del></h6> 
          	        : <h5>₱{product.price.toLocaleString('en-US')}.00</h5>
          	      }
          	    </div>
          	  </Link>
          	</Col>

          ))
        )}
      </Row>
    </Container>
  );
};

export default Footwear;