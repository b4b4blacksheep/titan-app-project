import React from 'react';
import { Container, Row, Col, Button, ListGroup, Form, Accordion, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImgAbout1 from '../assets/app-titan-about-1.png';
import ImgAbout2 from '../assets/app-titan-about-2.png';
import ImgAbout3 from '../assets/app-titan-about-3.png';

export default function PageAbout () {
  return (
      <Container fluid className="px-5 py-3">
        <Row>
          <Col>
        	<h1>Size Chart</h1>
        	<p>Sizes vary per brand. To check approximate measurements for each product, please check sizing under appropriate brand.</p>
          </Col>
        </Row>
        <Row>
        	<h2>Titan</h2>
        	<Accordion defaultActiveKey="0">
        	      <Accordion.Item eventKey="0">
        	        <Accordion.Header>2022 Apparel Collection</Accordion.Header>
        	        <Accordion.Body>
        	        	<p>Note: Actual Measurements of the garment when laid flat</p>
        	          	<Table striped bordered hover>
        	          	      <thead>
        	          	        <tr>
        	          	          <th>TITAN Size (Int'l Sizing)</th>
        	          	          <th>Asian Size Equivalent</th>
        	          	          <th>Length (in inches)</th>
        	          	          <th>Chest (in inches)</th>
        	          	        </tr>
        	          	      </thead>
        	          	      <tbody>
        	          	        <tr>
        	          	          <td>2XS</td>
        	          	          <td>XS</td>
        	          	          <td>27.5</td>
        	          	          <td>19</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>XS</td>
        	          	          <td>S</td>
        	          	          <td>28</td>
        	          	          <td>20</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>S</td>
        	          	          <td>M</td>
        	          	          <td>28.5</td>
        	          	          <td>21</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>M</td>
        	          	          <td>L</td>
        	          	          <td>29</td>
        	          	          <td>22</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>L</td>
        	          	          <td>XL</td>
        	          	          <td>29.5</td>
        	          	          <td>23</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>XL</td>
        	          	          <td>2XL</td>
        	          	          <td>30</td>
        	          	          <td>24</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>2XL</td>
        	          	          <td>3XL</td>
        	          	          <td>30.5</td>
        	          	          <td>25</td>
        	          	        </tr>
        	          	      </tbody>
        	          	    </Table>
        	          	    <p>Disclaimer: There may be variances of +/- ½” on the garment's actual measurements.</p>
        	        </Accordion.Body>
        	      </Accordion.Item>
        	      <Accordion.Item eventKey="1">
        	        <Accordion.Header>Tees</Accordion.Header>
        	        <Accordion.Body>
        	          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        	          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        	          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        	          aliquip ex ea commodo consequat. Duis aute irure dolor in
        	          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        	          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        	          culpa qui officia deserunt mollit anim id est laborum.
        	        </Accordion.Body>
        	      </Accordion.Item>
        	    </Accordion>
        </Row>
        <Row>
        	<h2>Tenement</h2>
        	<Accordion defaultActiveKey="0">
        	      <Accordion.Item eventKey="0">
        	        <Accordion.Header>2022 Apparel Collection</Accordion.Header>
        	        <Accordion.Body>
        	        	<p>Note: Actual Measurements of the garment when laid flat</p>
        	          	<Table striped bordered hover>
        	          	      <thead>
        	          	        <tr>
        	          	          <th>TITAN Size (Int'l Sizing)</th>
        	          	          <th>Asian Size Equivalent</th>
        	          	          <th>Length (in inches)</th>
        	          	          <th>Chest (in inches)</th>
        	          	        </tr>
        	          	      </thead>
        	          	      <tbody>
        	          	        <tr>
        	          	          <td>2XS</td>
        	          	          <td>XS</td>
        	          	          <td>27.5</td>
        	          	          <td>19</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>XS</td>
        	          	          <td>S</td>
        	          	          <td>28</td>
        	          	          <td>20</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>S</td>
        	          	          <td>M</td>
        	          	          <td>28.5</td>
        	          	          <td>21</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>M</td>
        	          	          <td>L</td>
        	          	          <td>29</td>
        	          	          <td>22</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>L</td>
        	          	          <td>XL</td>
        	          	          <td>29.5</td>
        	          	          <td>23</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>XL</td>
        	          	          <td>2XL</td>
        	          	          <td>30</td>
        	          	          <td>24</td>
        	          	        </tr>
        	          	        <tr>
        	          	          <td>2XL</td>
        	          	          <td>3XL</td>
        	          	          <td>30.5</td>
        	          	          <td>25</td>
        	          	        </tr>
        	          	      </tbody>
        	          	    </Table>
        	          	    <p>Disclaimer: There may be variances of +/- ½” on the garment's actual measurements.</p>
        	        </Accordion.Body>
        	      </Accordion.Item>
        	      <Accordion.Item eventKey="1">
        	        <Accordion.Header>Tees</Accordion.Header>
        	        <Accordion.Body>
        	          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        	          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        	          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        	          aliquip ex ea commodo consequat. Duis aute irure dolor in
        	          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        	          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        	          culpa qui officia deserunt mollit anim id est laborum.
        	        </Accordion.Body>
        	      </Accordion.Item>
        	    </Accordion>
        </Row>


      </Container>
  );
};
