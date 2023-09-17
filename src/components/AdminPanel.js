import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { PiList } from 'react-icons/pi';

import ProductsAdmin from './ProductsAdmin';

import '../assets/admin-panel/styles.css';

function AdminPanel() {
  const [currentSection, setCurrentSection] = useState('main'); // Initialize state to 'main'
  const [showNav, setShowNav] = useState(false); // Initialize state to false for mobile nav

  return (
    <Container fluid>
      <Row>
        {/* Toggler Button for mobile screens */}
      <div className="mobile-nav-button">
	      <Button variant="secondary" className="toggle-menu-button" onClick={() => setShowNav(!showNav)}>
	        <PiList size={24} />
	      </Button>
      </div>


        {/* Vertical Navbar */}
        <Col xs={showNav ? 12 : 0} md={3} className={`navbar-section ${showNav ? 'show' : ''}`}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setCurrentSection('products')}>Products</Nav.Link>
            <Nav.Link onClick={() => setCurrentSection('orders')}>Orders</Nav.Link>
            <Nav.Link onClick={() => setCurrentSection('users')}>Users</Nav.Link>
            <Nav.Link onClick={() => setCurrentSection('settings')}>Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Main Section */}
        <Col xs={12} md={showNav ? 12 : 9} className="main-section">
          {currentSection === 'main' && (
            <div>
              <h1>Main Content</h1>
              <p>This is the main content area.</p>
            </div>
          )}

          {currentSection === 'products' && <ProductsAdmin />}
          {/* ... other sections ... */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPanel;



