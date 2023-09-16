import React from 'react';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImgAbout1 from '../assets/app-titan-about-1.png';
import ImgAbout2 from '../assets/app-titan-about-2.png';
import ImgAbout3 from '../assets/app-titan-about-3.png';


import './style.css'

export default function PageAbout () {
  return (
      <Container fluid className="px-5 py-3">
        <Row>
          <Col>
        	<p class="h1 text-center">About Us</p>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
        	<p className="pt-5">Titan is the first and only basketball specialty concept store in the Philippines. Founded in 2010, our lifelong passion for the game inspired us to give life to our basketball dreams. This is our hoop sanctuary. It’s a safe haven for those who live and breathe basketball.</p>
        	<p>To the ones who obsess about the game as much as we do, this is home court. Our promise is to bring the best basketball products in the world and the most inspiring stories we can tell. To give everyone the power of choice.</p>
        	<p>From sold out arenas to high school tournaments to rundown gyms and unsung street courts, the spirit of the game is the same. We all do it for the love.</p>

          </Col>
          <Col xl={6}>
        	<img 
	          className="d-block w-100 fluid py-5"
	          src={ImgAbout1}
	        />
          </Col>
        </Row>
        <Row>
        	<Col xl={6}>
        	<img 
	          className="d-block w-100 fluid py-5"
	          src={ImgAbout2}
	        />
          </Col>
          <Col xl={6}>
        	<img 
	          className="d-block w-100 fluid py-5"
	          src={ImgAbout3}
	        />
          </Col>
        </Row>
        <Row className="px-5 py-5">
          <Col>
        	<p class="h5 text-center">From sold out arenas to high school tournaments to rundown gyms and unsung street courts, the spirit of the game is the same. We all do it for the love.</p>
          </Col>
        </Row>
      </Container>
  );
};
