import { Navbar, Nav, Container } from 'react-bootstrap';
import { PiUserLight, PiShoppingCartLight, PiMagnifyingGlassThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useContext } from 'react'

import UserContext from '../UserContext'

import ProductModal from './ProductModal'

import logo1 from '../assets/app-titan-logo.png'

import '../assets/navbar/styles.css';

export default function AppNavbar(){
	
	const { user } = useContext(UserContext)

	return (
	
		<Navbar expand="lg" className="py-3">
		  <Container>
		    <Link to="/">
		      <Navbar.Brand>
		        <img alt="Titan | 24" src={logo1} width="auto" height="50px" />
		      </Navbar.Brand>
		    </Link>

		    {/* Icons for small and medium screens */}
		    <Nav className="ms-auto nav-link d-lg-none flex-row">
          <Nav.Link href="#link" className="px-2">
            <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
          </Nav.Link>
          <Nav.Link href="#link" className="px-1">
            {user.isAdmin ? (
              <Link to="/admin">
                 <ProductModal color="#000000" size="2em"/>
               </Link>
            ) : (
              <Link to="/cart">
                <PiShoppingCartLight color="#000000" size="2em" />
              </Link>
            )}
          </Nav.Link>
          <Nav.Link as={Link} to={user.id ? "/account" : "/login"} className="px-2">
            <PiUserLight title="Account Settings" color="#000000" size="2em" />
          </Nav.Link>
		    </Nav>

		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      {/* Links */}
		      <Nav className="ms-auto me-auto nav-link text-uppercase">
		        {user.isAdmin ? 
                  (
                    <>
                      <Nav.Link>Welcome to Admin Dashboard! </Nav.Link>
                      <Nav.Link></Nav.Link>
                    </>
                  ) : 
                  (
                    <>
                      <Nav.Link as={Link} to="/collections/shop-all">Shop All</Nav.Link>
                      <Nav.Link as={Link} to="/collections/footwear">Footwear</Nav.Link>
                      <Nav.Link as={Link} to="/collections/apparel">Apparel</Nav.Link>
                      <Nav.Link as={Link} to="/collections/accessories">Accessories</Nav.Link>
                      <Nav.Link as={Link} to="/collections/brands">Brands</Nav.Link>
                      <Nav.Link href="#link">Blogs</Nav.Link>
                    </>
                  )
                }
		      </Nav>
		    </Navbar.Collapse>

		    {/* Icons for large screens */}
		    <Nav className="ms-auto nav-link d-none d-lg-flex flex-row">
          <Nav.Link href="#link" className="px-2">
            <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
          </Nav.Link>
          <Nav.Link href="#link" className="px-1">
            {user.isAdmin ? (
              <Link to="/admin">
                 <ProductModal color="#000000" size="2em"/>
               </Link>
            ) : (
            <Link to="/cart">
              <PiShoppingCartLight color="#000000" size="2em" />
            </Link>
            )}
          </Nav.Link>
          <Nav.Link as={Link} to={user.id ? "/account" : "/login"} className="px-2">
            <PiUserLight title="Account Settings" color="#000000" size="2em" />
          </Nav.Link>
        </Nav>
		  </Container>
		</Navbar>
	)
}