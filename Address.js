import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Import Components
import UserAddress from '../components/UserAddress';
import RegisterAddress from '../components/RegisterAddress';

// Import Contexts
import UserContext from '../UserContext';

// Import Styles
import '../assets/admin-panel/styles.css';

const Address = () => {
  // Hooks
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const token = localStorage.getItem('token');

  const [addedNew, setAddedNew] = useState(false);

  // Effect to redirect if user is not logged in
  useEffect(() => {
    if (!user.id) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleAddressAdded = () => {
    setAddedNew(true);
  };

  return (
    <Container fluid>
      <Row className="text-center-sm">
        <h1 className="my-account">Your Addresses</h1>
        <p className="text text-decoration-underline">
          <Link to="/account" className="text-decoration-none text-reset">
            Return to account details
          </Link>
        </p>
      </Row>
      <Row>
        <UserAddress token={token} addedNew={addedNew} />
        <Col lg={9} md={8} sm={12} className="main-section">
          <RegisterAddress onAddressAdded={handleAddressAdded} />
        </Col>
      </Row>
    </Container>
  );
};

export default Address;
