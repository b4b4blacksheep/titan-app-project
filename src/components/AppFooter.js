import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo1 from '../assets/app-titan-icon.png';

import AppPreFooter from '../components/AppPreFooter';

import './style.css';

export default function AppFooter() {
  return (
    <div>
    <AppPreFooter />
    <Navbar className="black-background">
      <Container>
         <Navbar.Brand as={Link} to="/" className="text-white">
          <img className="px-2 rounded" src={logo1} width="auto" height="30" alt="App Logo" />
          Download the App
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            © {new Date().getFullYear()} Titanomachy Inc., All Rights Reserved 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
