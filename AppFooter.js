import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppPreFooter from '../components/AppPreFooter';

import logo1 from '../assets/app-titan-icon.png';

import '../assets/footer/styles.css';

export default function AppFooter() {
  return (
    <div>
    <AppPreFooter />
    <Navbar className="black-bg">
      <Container>
         <Navbar.Brand as={Link} to="/" className="footer-text text-uppercase">
          <img className="px-2 rounded" src={logo1} width="auto" height="30" alt="App Logo" />
          Download the App
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="footer-text">
            © {new Date().getFullYear()} Titanomachy Inc., All Rights Reserved 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
