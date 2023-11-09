// import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
// import { PiUserLight, PiShoppingCartLight, PiMagnifyingGlassThin } from "react-icons/pi";
// import { FiSearch, FiX } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { useContext, useState, useEffect } from 'react'

// import UserContext from '../UserContext'

// import ProductModal from './ProductModal'
// import SearchBar  from './SearchBar'

// import logo1 from '../assets/app-titan-logo.png'

// import '../assets/navbar/styles.css';

// export default function AppNavbar(){
	
// 	const { user } = useContext(UserContext)

//   const [searchBarVisible, setSearchBarVisible] = useState(false);
//   const [showDiv, setShowDiv] = useState(true);

//   const handleHideDiv = () => {
//       setShowDiv(false);
//     };

//   const [showFirst, setShowFirst] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirst((prevShowFirst) => !prevShowFirst);
//     }, 3000); // Change every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

// 	return (
// 	 <>
//    showDiv && (
//      <div className="bg-light" data-aos="fade-down">
//        <div className="container" data-aos="fade-down">
//          <div className="row" data-aos="fade-down">
//            <div className="col text-center mt-3" data-aos="fade-down">
//              {showFirst && (
//                <p data-aos="fade-down">
//                  <span style={{ fontWeight: 'bold' }}>Free Nationwide Delivery</span> Applies to orders of ₱7,000 or more
//                  <FiX
//                    style={{ cursor: 'pointer' }}
//                    color="#000000"
//                    size="1.3em"
//                    className="float-end"
//                    data-aos="fade-down"
//                    onClick={handleHideDiv}
//                  />
//                </p>
//              )}
//              {!showFirst && (
//                <p data-aos="fade-down">
//                  Save up to 40% off on select styles. <span style={{ textDecoration: 'underline' }}>Shop now</span>.
//                  <FiX
//                    style={{ cursor: 'pointer' }}
//                    color="#000000"
//                    size="1.3em"
//                    className="float-end"
//                    data-aos="fade-down"
//                    onClick={handleHideDiv}
//                  />
//                </p>
//              )}
//            </div>
//          </div>
//        </div>
//      </div>
//    )

//     <Navbar expand="lg" className="py-3">
//         <Container>
//           <Link to="/">
//             <Navbar.Brand>
//               <img alt="Titan | 24" src={logo1} width="auto" height="50px" />
//             </Navbar.Brand>
//           </Link>

//           {/* Icons for small and medium screens */}
//           <Nav className="ms-auto nav-link d-lg-none flex-row">
//               <div onClick={() => setSearchBarVisible(!searchBarVisible)}>
//                 <Nav.Link href="#link" className="px-2">
//                   <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
//                 </Nav.Link>
//               </div>
//             <Nav.Link href="#link" className="px-1">
//               {user.isAdmin ? (
//                 <Link to="/admin">
//                    <ProductModal color="#000000" size="2em"/>
//                  </Link>
//               ) : (
//                 <Link to="/cart">
//                   <PiShoppingCartLight color="#000000" size="2em" />
//                 </Link>
//               )}
//             </Nav.Link>
//             <Nav.Link as={Link} to={user.id ? "/account" : "/login"} className="px-2">
//               <PiUserLight title="Account Settings" color="#000000" size="2em" />
//             </Nav.Link>
//           </Nav>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* Links */}
//             <Nav className="ms-auto me-auto nav-link text-uppercase">
//               {user.isAdmin ? 
//                     (
//                       <>
//                         <Nav.Link>Welcome to Admin Dashboard! </Nav.Link>
//                         <Nav.Link></Nav.Link>
//                       </>
//                     ) : 
//                     (
//                       <>
//                         <Nav.Link as={Link} to="/collections/shop-all">Shop All</Nav.Link>
//                         <Nav.Link as={Link} to="/collections/footwear">Footwear</Nav.Link>
//                         <Nav.Link as={Link} to="/collections/apparel">Apparel</Nav.Link>
//                         <Nav.Link as={Link} to="/collections/accessories">Accessories</Nav.Link>
//                         <Nav.Link as={Link} to="/collections/brands">Brands</Nav.Link>
//                         <Nav.Link href="#link">Blogs</Nav.Link>
//                       </>
//                     )
//                   }
//             </Nav>
//           </Navbar.Collapse>

//           {/* Icons for large screens */}
//           <Nav className="ms-auto nav-link d-none d-lg-flex flex-row">
//               <div onClick={() => setSearchBarVisible(!searchBarVisible)}>
//                 <Nav.Link href="#link" className="px-2">
//                   <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
//                 </Nav.Link>
//               </div>
//             <Nav.Link href="#link" className="px-1">
//               {user.isAdmin ? (
//                 <Link to="/admin">
//                    <ProductModal color="#000000" size="2em"/>
//                  </Link>
//               ) : (
//               <Link to="/cart">
//                 <PiShoppingCartLight color="#000000" size="2em" />
//               </Link>
//               )}
//             </Nav.Link>
//             <Nav.Link as={Link} to={user.id ? "/account" : "/login"} className="px-2">
//               <PiUserLight title="Account Settings" color="#000000" size="2em" />
//             </Nav.Link>
//           </Nav>
//         </Container>
//     </Navbar>

//     {/* Conditionally render the search bar based on searchBarVisible state */}
//     {searchBarVisible && (
//       <Navbar style={{ background: '#ffffff' }} expand="lg" data-aos="fade-down">
//         <Container>
//           <Form inline style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//             <FiSearch style={{ marginRight: '10px' }} />
//             <FormControl type="text" placeholder="Search" style={{ width: '100%', border: 'none' }} />
//             <FiX
//               style={{ marginLeft: '10px', cursor: 'pointer' }}
//               onClick={() => setSearchBarVisible(false)} // Hide the search bar
//             />
//           </Form>
//         </Container>
//       </Navbar>
//     )}
//   </>
// 	)
// }

import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { PiUserLight, PiShoppingCartLight, PiMagnifyingGlassThin } from "react-icons/pi";
import { FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import UserContext from '../UserContext';

import ProductModal from './ProductModal';

import logo1 from '../assets/app-titan-logo.png';

import '../assets/navbar/styles.css';

export default function AppNavbar() {
  const { user } = useContext(UserContext);

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [showDiv, setShowDiv] = useState(true);

  const handleHideDiv = () => {
    setShowDiv(false);
  };

  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prevShowFirst) => !prevShowFirst);
    }, 3000); // Change every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {showDiv && (
        <div className="bg-light" data-aos="fade-down">
          <div className="container" data-aos="fade-down">
            <div className="row" data-aos="fade-down">
              <div className="col text-center mt-3" data-aos="fade-down">
                {showFirst && (
                  <p data-aos="fade-down">
                    <span style={{ fontWeight: 'bold' }}>Free Nationwide Delivery</span> Applies to orders of ₱7,000 or more
                    <FiX
                      style={{ cursor: 'pointer' }}
                      color="#000000"
                      size="1.3em"
                      className="float-end"
                      data-aos="fade-down"
                      onClick={handleHideDiv}
                    />
                  </p>
                )}
                {!showFirst && (
                  <p data-aos="fade-down">
                    Save up to 40% off on select styles. <span style={{ textDecoration: 'underline' }}>Shop now</span>.
                    <FiX
                      style={{ cursor: 'pointer' }}
                      color="#000000"
                      size="1.3em"
                      className="float-end"
                      data-aos="fade-down"
                      onClick={handleHideDiv}
                    />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Navbar expand="lg" className="py-3">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img alt="Titan | 24" src={logo1} width="auto" height="50px" />
            </Navbar.Brand>
          </Link>

          {/* Icons for small and medium screens */}
          <Nav className="ms-auto nav-link d-lg-none flex-row">
            <div onClick={() => setSearchBarVisible(!searchBarVisible)}>
              <Nav.Link href="#link" className="px-2">
                <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
              </Nav.Link>
            </div>
            <Nav.Link href="#link" className="px-1">
              {user.isAdmin ? (
                <Link to="/admin">
                  <ProductModal color="#000000" size="2em" />
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
              {user.isAdmin ? (
                <>
                  <Nav.Link>Welcome to Admin Dashboard! </Nav.Link>
                  <Nav.Link></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/collections/shop-all">Shop All</Nav.Link>
                  <Nav.Link as={Link} to="/collections/footwear">Footwear</Nav.Link>
                  <Nav.Link as={Link} to="/collections/apparel">Apparel</Nav.Link>
                  <Nav.Link as={Link} to="/collections/accessories">Accessories</Nav.Link>
                  <Nav.Link as={Link} to="/collections/brands">Brands</Nav.Link>
                  <Nav.Link href="#link">Blogs</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>

          {/* Icons for large screens */}
          <Nav className="ms-auto nav-link d-none d-lg-flex flex-row">
            <div onClick={() => setSearchBarVisible(!searchBarVisible)}>
              <Nav.Link href="#link" className="px-2">
                <PiMagnifyingGlassThin title="Search Products" color="#000000" size="2em" />
              </Nav.Link>
            </div>
            <Nav.Link href="#link" className="px-1">
              {user.isAdmin ? (
                <Link to="/admin">
                  <ProductModal color="#000000" size="2em" />
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

      {/* Conditionally render the search bar based on searchBarVisible state */}
      {searchBarVisible && (
        <Navbar style={{ background: '#ffffff' }} expand="lg" data-aos="fade-down">
          <Container>
            <Form inline style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <FiSearch style={{ marginRight: '10px' }} />
              <FormControl type="text" placeholder="Search" style={{ width: '100%', border: 'none' }} />
              <FiX
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => setSearchBarVisible(false)} // Hide the search bar
              />
            </Form>
          </Container>
        </Navbar>
      )}
    </>
  );
}
