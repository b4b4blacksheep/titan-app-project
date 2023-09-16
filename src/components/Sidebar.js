import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Sidebar = ({ setSelectedLink }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Operations
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Button variant="outline-primary" onClick={() => setSelectedLink('Add Products')}>
              Add Products
            </Button>
            <Button variant="outline-primary" onClick={() => setSelectedLink('View All Footwear')}>
              View All Footwear
            </Button>
            {/* Other buttons */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* Additional Accordion Cards can go here */}
    </Accordion>
  );
};

export default Sidebar;

