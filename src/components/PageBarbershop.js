// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// import ImgBarbershop1 from '../assets/app-titan-barbershop.png';
// import ImgBarbershop2 from '../assets/app-titan-barbershop-1.png';

// import './style.css'

// const ImageCenterPage = () => {
//   return (
//     <Container fluid>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6} className="text-center">
//           <img
//             src={ImgBarbershop1}
//             alt="Titan Barbershop"
//             className="img-fluid"
//           />
//         </Col>
//       </Row>
//       <Row className="mx-lg-5 text-center">
//       <p>Our barbershops were created to provide the modern gentleman with a top class, traditional barber experience. A place to come home to and enjoy the spirit of the game while you get groomed up or just to relax. Our seasoned barbers will give you that expert cut or shave that you’ve been looking forward to all day. This is where we come together as a community that shares the same love for the game. So pick up something to read, catch the game that’s on, talk to your barber or the guy in the next chair about anything basketball, because there’s no place like home.</p>
//       </Row>
//       <Row className="justify-content-center py-lg-5 my-lg-5">
//         <Col xs={12} md={6} lg={12} className="text-center">
//           <img
//             src={ImgBarbershop2}
//             className="img-fluid"
//           />
//         </Col>
//       </Row>
//       <Row>
//       	<p className="h1 text-center pt-5">Service Menu</p>
//       	<Col lg={6} className="py-lg-3 py-md-3 py-3">
//       		<h4>Haircut - PHP 350</h4>
//       		<p>Traditional haircut tailored to suit your personal style. Quick rinse shampoo and razor cleanup included.</p>
//       		<h4>Buzz - PHP 250</h4>
//       		<p>Simple, to the point quick cut. Single length with razor cleanups on the sides and neck.</p>
//       		<h4>Shave - PHP 400</h4>
//       		<p>The classic straight razor wet shave. Includes premium shaving products and soothing mint hot towels for your full satisfaction.</p>
//       		<h4>Cut + Shave - PHP 600</h4>
//       		<p>Perfect combination of a standard cut and style haircut paired with our hot towel shave. A barbershop favorite.</p>
//       	</Col>
//       	<Col lg={6} className="py-lg-3 py-md-3 pb-5">
//       		<h4>Titan Special - PHP 800</h4>
//       		<p>The specialty of the house: Full service haircut, hot towel shave and a relaxing scalp massage to complete our signature experience.</p>
//       		<h4>Scalp Massage - PHP 400</h4>
//       		<p>Head, neck and scalp massage by our resident barbers. Let expert hands take care of you at the end of a long day.</p>
//       		<h4>Scalp Treatment - PHP 1,200</h4>
//       		<p>Rejuvenating treatment for the scalp. Cleanses and conditions to keep your hair in top form.</p>
//       		<h4>Color - PHP 1,200</h4>
//       		<p>Get rid of the grey or enhance your natural hair color with this treatment. Service only option is available upon request.</p>
//       	</Col>
//       </Row>

//     </Container>
//   );
// };

// export default ImageCenterPage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgBarbershop1 from '../assets/app-titan-barbershop.png';
import ImgBarbershop2 from '../assets/app-titan-barbershop-1.png';

import './style.css';

// Define service constants to replace magic numbers
const HAIRCUT_PRICE = "PHP 350";
const BUZZ_PRICE = "PHP 250";
const SHAVE_PRICE = "PHP 400";
const CUT_SHAVE_PRICE = "PHP 600";
const TITAN_SPECIAL_PRICE = "PHP 800";
const SCALP_MASSAGE_PRICE = "PHP 400";
const SCALP_TREATMENT_PRICE = "PHP 1,200";
const COLOR_PRICE = "PHP 1,200";

const ImageCenterPage = () => {
  return (
    <Container fluid as="main">
      <Row className="justify-content-center" as="header">
        <Col xs={12} md={6} className="text-center">
          <img
            src={ImgBarbershop1}
            alt="Titan Barbershop"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="mx-lg-5 text-center" as="article">
        <p>Our barbershops were created to provide the modern gentleman with a top class, traditional barber experience. A place to come home to and enjoy the spirit of the game while you get groomed up or just to relax. Our seasoned barbers will give you that expert cut or shave that you’ve been looking forward to all day. This is where we come together as a community that shares the same love for the game. So pick up something to read, catch the game that’s on, talk to your barber or the guy in the next chair about anything basketball, because there’s no place like home.</p>
      </Row>
      <Row className="justify-content-center py-lg-5 my-lg-5" as="section">
        <Col xs={12} md={6} lg={12} className="text-center">
          <img
            src={ImgBarbershop2}
            alt="Inside Titan Barbershop"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row as="section">
        <header className="h1 text-center pt-5">Service Menu</header>
        <Col lg={6} md={6} className="py-lg-5 py-md-3 py-3">
          <h2>Haircut - {HAIRCUT_PRICE}</h2>
          <p className="barber-text pb-3">Traditional haircut tailored to suit your personal style. Quick rinse shampoo and razor cleanup included.</p>
          <h2>Buzz - {BUZZ_PRICE}</h2>
          <p className="barber-text pb-3">Simple, to the point quick cut. Single length with razor cleanups on the sides and neck.</p>
          <h2>Shave - {SHAVE_PRICE}</h2>
          <p className="barber-text pb-3">The classic straight razor wet shave. Includes premium shaving products and soothing mint hot towels for your full satisfaction.</p>
          <h2>Cut + Shave - {CUT_SHAVE_PRICE}</h2>
          <p className="barber-text pb-3">Perfect combination of a standard cut and style haircut paired with our hot towel shave. A barbershop favorite.</p>
        </Col>
        <Col lg={6} md={6} className="py-lg-5 py-md-3 pb-5">
          <h2>Titan Special - {TITAN_SPECIAL_PRICE}</h2>
          <p className="barber-text pb-3">The specialty of the house: Full service haircut, hot towel shave and a relaxing scalp massage to complete our signature experience.</p>
          <h2>Scalp Massage - {SCALP_MASSAGE_PRICE}</h2>
          <p className="barber-text pb-3">Head, neck and scalp massage by our resident barbers. Let expert hands take care of you at the end of a long day.</p>
          <h2>Scalp Treatment - {SCALP_TREATMENT_PRICE}</h2>
          <p className="barber-text pb-3">Rejuvenating treatment for the scalp. Cleanses and conditions to keep your hair in top form.</p>
          <h2>Color - {COLOR_PRICE}</h2>
          <p className="barber-text pb-3">Get rid of the grey or enhance your natural hair color with this treatment. Service only option is available upon request.</p>
        </Col>
      </Row>
      <Row className="py-lg-5 py-md-3 pb-5">
        <h4><em>Each cut and shave uses the best hair care and shave products from Baxter of California.</em></h4>
      </Row>
      <Row as="section" className="pb-5">
        <header className="h1 text-center py-5">Our Locations</header>
        <Col lg={4} md={4} className="py-md-3 py-5">
          <h2>Titan Fort</h2>
            <p className="barber-text">Upper Ground Floor</p>
            <p className="barber-text">One Bonifacio High Street</p>
            <p className="barber-text">Bonifacio Global City, Taguig 1634</p>
          <br/>
            <p className="barber-text">fort@titan22.com</p>
          <br/>
            <p className="barber-text">Mon-Sun 11am-8pm</p>
        </Col>
        <Col lg={4} md={4} className="py-md-3 py-5">
           <h2>Titan Conrad</h2>
             <p className="barber-text">#230-231 S Maison, Second Floor</p>
             <p className="barber-text">Conrad Hotel Manila, Marina Way</p>
             <p className="barber-text">Mall of Asia Complex, Pasay 1300</p>
           <br/>
             <p className="barber-text">+63 2 8 368 2496</p>
           <br/>
             <p className="barber-text">conrad@titan22.com</p>
           <br/>
             <p className="barber-text">Mon-Sun 10am-8pm</p>
         </Col>
         <Col lg={4} md={4} className="py-md-3 py-5">
            <h2>Titan Vertis</h2>
              <p className="barber-text">Level 3, Vertis North</p>
              <p className="barber-text">cor. North Ave Barangay Bagong Pag-Asa</p>
              <p className="barber-text">Quezon City 1105</p>
            <br/>
              <p className="barber-text">+63 2 8 720 9528</p>
            <br/>
              <p className="barber-text">vertis@titan22.com</p>
            <br/>
              <p className="barber-text">Mon-Sun 10am-8pm</p>
          </Col>
      </Row>
    </Container>
  );
};

export default ImageCenterPage;
