import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Container } from 'react-bootstrap';

import CustomBlkButton from '../components/CustomBlkButton';

import '../assets/footer/styles.css';

const linkItems = [
  { label: 'Contact Us', path: '/pages/contact' },
  { label: 'About Us', path: '/pages/about' },
  { label: 'Store Locator', path: '/pages/store-locator' },
  { label: 'Barbershop', path: '/pages/barbershop' },
  { label: 'Careers', path: '/pages/careers' },
];

const infoLinksItems = [
  { label: 'Track your order', path: 'https://tracking.acommerce.asia/titanomachyph', external: true },
  { label: 'Size Chart', path: '/pages/size-guide'},
  'FAQS',
  'Return & Exchanges',
  'Terms of Service',
  'Privacy Policy',
  'Shipping Policy',
];


export default function PreFooter () {
  return (
    <Container fluid>
      <Row className="black-bg mt-lg-5 p-5">
        <Col xs={6} md={3} lg={2}>
          {linkItems.map((item, index) => (
            <h5 key={index} className="pre-footer-text">
              <Link to={item.path} className="text-white text-decoration-none">
                {item.label}
              </Link>
            </h5>
          ))}
        </Col>
        <Col xs={6} md={3} lg={2}>
          {infoLinksItems.map((item, index) => (
            <h5 key={index} className="pre-footer-text">
              {typeof item === 'string' ? (
                item
              ) : (
                <a href={item.path} target={item.external ? '_blank' : '_self'} rel="noopener noreferrer" className="text-white text-decoration-none">
                  {item.label}
                </a>
              )}
            </h5>
          ))}
        </Col>

        <Col md={3} lg={3} sm={12} className="ms-auto pt-3">
          <h5 className="pre-footer-text">Subscribe to our newsletter</h5>
          <Row className="justify-content-start align-items-center">
            <Col xs={10} sm={10} md={8} lg={9}>
              <Form.Control
                type="email"
                placeholder="name@domain.com"
                className="mb-2 pre-footer-text"
              />
            </Col>
            <Col xs={2} sm={2} md={3} lg={3}>
                <CustomBlkButton 
                  label="Send→" 
                  customClass="button-blk"
                  variant="black" 
                />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  );
};

