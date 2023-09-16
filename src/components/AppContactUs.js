import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './style.css'

export default function MyForm () {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <h1 className="text-center">Contact Us</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control type="text" placeholder="Order Number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Concern</Form.Label>
              <Form.Select>
                <option>Delievery Tracking</option>
                <option>Return & Exchanges</option>
                <option>Refund Status</option>
                <option>Order Cancellation</option>
                <option>Data Privacy</option>
                <option>Careers at Titan</option>
                <option>Titan Barbershop</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <div className="d-flex pb-5 justify-content-center">
            	<Button className="w-100" variant="outline-dark">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};