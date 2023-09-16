import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/banner/styles.css';

const BannerTitle = () => <h1>AIR JORDAN 2 LOW 'TITAN'</h1>;

const BannerSubtitle = () => <p>MAKE HISTORY PROUD.</p>;

const ShopNowButton = () => (
  <Link to="/products" className="btn btn-dark px-5" id="submitBtn" aria-label="Shop Now">
    Shop Now
  </Link>
);

const Banner = () => (
  <div className="landingDiv min-vh-100" alt="Air Jordan 2 Low 'Titan'">
    <Row className="py-3 py-md-5 justify-content-center">
      <Col xs={12} className="text-center py-3 py-md-5">
        <BannerTitle />
        <BannerSubtitle />
        <ShopNowButton />
      </Col>
    </Row>
  </div>
);

export default Banner;
