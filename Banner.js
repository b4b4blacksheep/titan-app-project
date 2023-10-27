import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/banner/styles.css';

import CustomBlkButton from '../components/CustomBlkButton';

const Banner = () => (
  <div className="landingDiv min-vh-100" alt="Air Jordan 2 Low 'Titan'">
    <Row className="py-3 py-md-5 justify-content-center">
      <Col xs={12} className="text-center py-3 py-md-5">
        <h1>AIR JORDAN 2 LOW 'TITAN'</h1>
        <p>MAKE HISTORY PROUD.</p>
          <CustomBlkButton 
            label="Shop Now" 
            customClass="button-blk"
            variant="black" 
          />
      </Col>
    </Row>
  </div>
);

export default Banner;
