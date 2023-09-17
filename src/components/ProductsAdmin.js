import React, { useState, useEffect, useContext }from 'react';
import { Nav, NavDropdown, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/products-admin/styles.css';
import UserContext from '../UserContext';

const navItems = [
  {
    title: 'Footwear',
    id: 'footwear-dropdown',
    description: 'In the Footwear Dropdown menu, administrators can select various categories. By choosing "All-Active," you can view all the active products, which are also visible to users and clients. The "Non-Active" option will display products that have been marked as inactive, while the "Archived" option shows products that have already been archived.',
    links: [
      { label: 'All-Active', link: '/admin/all-active-footwear' },
      { label: 'Non-Active', link: '/admin/non-active-footwear' },
      { label: 'Archived', link: '/admin/archived-footwear' },
    ],
  },
  {
    title: 'Apparel',
    id: 'apparel-dropdown1',
    description: 'In the Apparel Dropdown menu, administrators have the option to select from multiple categories. By selecting "All-Active," you gain access to all currently active products, which are also accessible to users and clients. Choosing the "Non-Active" option will show you products that have been designated as inactive, while the "Archived" selection reveals products that have already been archived.',
    links: [
      { label: 'All-Active', link: '/admin/all-active-apparel' },
      { label: 'Non-Active', link: '/admin/non-active-apparel' },
      { label: 'Archived', link: '/admin/Apparel-archived' },
    ],
  },
  {
    title: 'Accessories',
    id: 'accessories-dropdown',
    description: 'sample descriptio2n',
    links: [
      { label: 'All-Active', link: '/admin/Accessories' },
      { label: 'Non-Active', link: '/admin/Accessories' },
      { label: 'Archived', link: '/admin/Accessories-archived' },
    ],
  },
  {
    title: 'Brands',
    id: 'brands-dropdown',
    description: 'sample description',
    links: [
      { label: 'All-Active', link: '/admin/Brands' },
      { label: 'Non-Active', link: '/admin/Brands' },
      { label: 'Archived', link: '/admin/Brands-archived' },
    ],
  },
  {
    title: 'Shop All',
    id: 'brands-dropdown',
    description: 'sample description',
    links: [
      { label: 'All-Active', link: '/admin/Shop All' },
      { label: 'Non-Active', link: '/admin/Shop All' },
      { label: 'Archived', link: '/admin/Shop All-archived' },
    ],
  }
];

function ProductsAdmin() {

  const { user, setUser } = useContext(UserContext)

  console.log(user);

  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ selectedLink, setSelectedLink ] = useState('/new-arrivals'); // Initial default value
  const [ selectedLabel, setSelectedLabel ] = useState('New-Arrivals'); // Initial default value
  const [ selectedDescription, setSelectedDescription ] = useState('Welcome, Admin! You have exclusive access to manage the entire range of footwear, apparel, accessories, brands products on this platform. '); // Initial default value
  console.log(selectedLink);
  console.log(selectedLabel);
  console.log(selectedDescription);

  function selectItem(link, description) {
    setSelectedDescription(description);
  	setSelectedLink(link.link);
  	setSelectedLabel(link.label)
  }

  const renderNavDropdown = ({ title, id, links, description }, setSelectedLink) => (
    <NavDropdown title={title} id={id}>
      {links.map((link, index) => (
        <NavDropdown.Item onClick={() => selectItem(link, description)} key={index}>
          {link.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
  
  useEffect(() => {
    setIsLoading(true);
    
    fetch(`http://localhost:8001/products/${selectedLink}`, {
    	method: 'GET',
    	headers: {
    	  'Content-Type': 'application/json',
    	  Authorization: `Bearer ${localStorage.getItem("token")}`
    	}
    })
      .then(response => {
      	if (!response.ok) {
  	      throw new Error('Network response was not ok');
  	    }
  	    return response.json();
      })
      .then(data => {
      	console.log("Fetched data:", data);  // Debugging line
	    setProducts(data);
	    setIsLoading(false);
      })
      .catch(err => {
        console.log("Error fetching:", err);  // Debugging line
        setError(err);
        setIsLoading(false);
      });
  }, [selectedLink]);

  return (
    <div className="products-admin-container py-2">
      <h2 className="text-center">Products Admin Panel</h2>
      <Nav variant="tabs" defaultActiveKey="/footwear" className="responsive-nav">
        {navItems.map((item) => renderNavDropdown(item, setSelectedLink))}
      </Nav>
      
      <div className="admin-main-content pt-3">
        <Alert variant="success" className="hide-on-small">
          <Alert.Heading>Hey, {user.email}</Alert.Heading>
            <hr/>
            <p className="text-center">{selectedDescription}</p>
        </Alert>
        <h1 className="loginTitle">{selectedLabel}</h1>
        <Row className="pb-5">
          {isLoading ? (
            <div className="center-loading">Loading...</div>
          ) :  error ? (
  			<div className="center-loading">Error: {error.message}</div>  // Changed from 'Loading...' to 'Error'
		  ) : (
            products.slice(0, 8).map((product, index) => (
              <Col key={product._id} xs={12} sm={6} md={6} lg={4}>
                 <Link to={`/products/admin/${product._id}`} className="text-decoration-none text-dark">
                    <div className="homeHighlight px-3 highlight1">
                      <img className="img-fluid my-2" src={product.imageLinks[0]} alt={`Logo ${index + 1}`} />
                      <h3 className="text-secondary">{product.brand}</h3>
                      <h5>{product.name}</h5>
                      <h5>₱{product.price.toLocaleString('en-US')}.00</h5>
                    </div>
                  </Link>
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
}

export default ProductsAdmin;
