import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sale = () => {
  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    fetch(`${process.env.REACT_APP_API_URL}/products/sale`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
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
      <h1 className="brandTitle pt-5">Specials Sale<Link to="/collections/sale" className="viewAll px-3">View All →</Link></h1>
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
                  <h3 className="text-secondary brandName">{product.brand}</h3>
                  <h5 className="productDetails">{product.name}</h5>
                  <h4 className="productPrice text-danger">₱{product.onSaleValue.toLocaleString('en-US')}.00</h4>
                  <h6 className="productPrice"><del>₱{product.price.toLocaleString('en-US')}.00</del></h6>
                </div>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Sale;