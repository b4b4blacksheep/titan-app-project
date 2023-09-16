import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    fetch('http://localhost:8001/products/new-arrivals')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
      	console.log(data); // Will display all fetched data from our database, starting with the latest addition first
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);


  return (
    <Container>
      <h1 className="loginTitle pt-5">New Arrivals<Link to="/products/" className="viewAll">View All →</Link></h1>
      <Row className="pb-5">
        {isLoading ? (
          <div className="center-loading">Loading...</div>
        ) : error ? (
          <div className="center-loading">Loading...</div>
        ) : (
          products.slice(0, 8).map((product, index) => (
            <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
              <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
                <div className="homeHighlight px-3 highlight1">
                  <img className="img-fluid my-2" src={product.imageLinks[0]} alt={`Logo ${index + 1}`} />
                  <h3 className="text-secondary">{product.brand}</h3>
                  <h5>{product.name}</h5>
                  <h5>₱{product.price.toLocaleString('en-US')}.00</h5>
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