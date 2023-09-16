import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Left Panel */}
        <Col xs={12} sm={4} md={3}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Products
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Product-related content here</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Users
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>User-related content here</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Orders
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Order-related content here</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Settings
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Settings-related content here</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>

        {/* Main Board */}
        <Col xs={12} sm={8} md={9}>
          <div>Main board content goes here...</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
