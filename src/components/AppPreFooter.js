import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react';

import './style.css'

const linkItems = [
  { label: 'Contact Us', path: '/page/contact-us' },
  { label: 'About Us', path: '/pages/about' },
  { label: 'Store Locator', path: '/pages/store-locator' },
  { label: 'Barbershop', path: '/pages/barbershop' },
  { label: 'Careers', path: '/pages/careers' },
];

const infoItems = [
  'Track your order',
  'Size Chart',
  'FAQS',
  'Return & Exchanges',
  'Terms of Service',
  'Privacy Policy',
  'Shipping Policy',
];

export default function PreFooter () {
  return (
      <Container fluid>
        <Row className="black-background p-5">
          <Col xs={6} md={3} lg={2}>
            {linkItems.map((item, index) => (
              <h5 key={index} className="barber-text text-white">
                <Link to={item.path} className="text-white text-decoration-none">
                  {item.label}
                </Link>
              </h5>
            ))}
          </Col>
          <Col xs={6} md={3} lg={2} >
            {infoItems.map((item, index) => (
              <h5 key={index} className="text-white">
                {item}
              </h5>
            ))}
          </Col>
          <Col md={3} lg={3} sm={12} className="ms-auto pt-3">
            <h5 className="text-white">Subscribe to our newsletter</h5>
            <Row className="justify-content-start">
              <Form.Control
                type="email"
                placeholder="name@domain.com"
                className="mb-2"
              />
              <Button variant="outline-dark" className="text-end text-light my-2">Send →</Button>
           </Row>
          </Col>
        </Row>
      </Container>
  );
};

