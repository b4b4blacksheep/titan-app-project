import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from '../UserContext';
import useFetchUserDetails from '../components/useFetchUserDetails';

import '../assets/account/styles.css';

const Account = () => {

  const navigate = useNavigate();
  const { user, unsetUser } = useContext(UserContext);
  const { loading, data, error } = useFetchUserDetails(user.id);

  const [ orders ] = useState("You haven't placed any orders yet.");

  useEffect(() => {
    if (!user.id) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    unsetUser();
    window.location.reload();
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <div className="account-container mb-4">
        <h1 className="my-account">My Account</h1>
        <h1 
          className="text text-decoration-underline" 
          onClick={handleLogout} 
          style={{ cursor: 'pointer' }}
        >
          Logout
        </h1>
      </div>
      <Row>
        <Col xs={12} md={9}>
          <h1 className="account-h1 py-lg-3">Order History</h1>
          <p className="productPrice pb-5">
            {data.isAdmin ? `This is an "Admin Account"!` : orders}
          </p>

        </Col>
        <Col xs={12} md={3}>
          <div>
            <h1 className="account-h1 py-lg-3">Account Information</h1>
            {data && <p className="productPrice">{`${data.firstName} ${data.lastName}`}</p>}
            <p className="productPrice pb-5">{user.email}</p>
            <h1 className="account-h1">Default Address</h1>
            {data && (
              <>
                <p className="productPrice">
                  {
                    data.addresses.length > 0 ? 
                    (
                      data.addresses.find(address => address.isPrimary) ? 
                      `${data.addresses.find(address => address.isPrimary).firstName} ${data.addresses.find(address => address.isPrimary).lastName}` : 
                      "You haven't set a primary address yet"
                    ) : 
                    "You haven't placed any address yet"
                  }
                </p>
                {
                  data.isAdmin ? 
                  (
                    <p className="productPrice py-lg-3">
                      This is an "Admin Account"!
                    </p>
                  ) :
                  (
                    <p className="productPrice py-lg-3">
                      <Link to="/account/addresses" className="text-decoration-underline text-dark">
                        View Addresses({`${data.addresses.length}`})
                      </Link>
                    </p>
                  )
                }

              </>
            )}

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
