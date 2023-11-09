import React from 'react';
import { Navbar, Container, Form, FormControl } from 'react-bootstrap'; // You may need to import the necessary components from your library
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <Navbar style={{ background: '#ffffff' }} expand="lg">
      <Container>
        <Form inline style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <FiSearch style={{ marginRight: '10px' }} />
          <FormControl type="text" placeholder="Search" style={{ width: '100%', border: 'none' }} />
          <FiX style={{ marginLeft: '10px' }} />
        </Form>
      </Container>
    </Navbar>
  );
}

export default SearchBar;
