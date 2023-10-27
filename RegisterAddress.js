import React, { useState, useContext, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import UserContext from '../UserContext';
import axios from 'axios';
import { Form, Row, Col } from 'react-bootstrap';
import CustomBlkButton from '../components/CustomBlkButton';
import ProvincesPhilippines  from '../components/ProvincesPhilippines';
import Countries  from '../components/Countries';
import { countries } from '../components/Countries';
import { provincesPhilippines } from '../components/ProvincesPhilippines';

const apiUrl = process.env.REACT_APP_API_URL;

const RegisterAddress = ({ onAddressAdded }) => {

	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	const token = localStorage.getItem('token');

	const [ country, setCountry ] = useState('Philippines');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ company, setCompany ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ apartment, setApartment ] = useState('');
	const [ postalCode, setPostalCode ] = useState('');
	const [ city, setCity ] = useState('');
	const [ region, setRegion ] = useState('Metro Manila');
	const [ phone, setPhone ] = useState('');

	async function addAddress(event) {
	  event.preventDefault();

	  const addressData = {
	    country,
	    firstName,
	    lastName,
	    company,
	    address,
	    apartment,
	    postalCode,
	    city,
	    region,
	    phone,
	  };

	  try {
	    const config = {
	      headers: {
	        'Authorization': `Bearer ${token}`,
	      },
	    };

	    const response = await axios.patch(`${apiUrl}/users/add-address`, addressData, config);

	    if (onAddressAdded) {
	      onAddressAdded();
	    }
	    setCountry('Philippines');
	    setFirstName('');
	    setLastName('');
	    setCompany('');
	    setAddress('');
	    setApartment('');
	    setPostalCode('');
	    setCity('');
	    setRegion('Metro Manila');
	    setPhone('');

	  } catch (error) {
	    console.error('There was an error adding the address:', error);
	  }
	}

	const handleChange = (setter) => (e) => setter(e.target.value);

	  const formFields = [
		{ 
		 id: 'country', 
		 label: 'Country/Region', 
		 state: [country, setCountry], 
		 colSize: 12,
		 type: 'select',
		 options: countries
		},
	    { id: 'firstName', label: 'First Name', state: [firstName, setFirstName], colSize: 6 },
	    { id: 'lastName', label: 'Last Name', state: [lastName, setLastName], colSize: 6 },
	    { id: 'company', label: 'Company', state: [company, setCompany], colSize: 12 },
	    { id: 'address', label: 'Address', state: [address, setAddress], colSize: 12 },
	    { id: 'apartment', label: 'Apartment, suite, etc.', state: [apartment, setApartment], colSize: 12 },
	    { id: 'postalCode', label: 'Postal Code', state: [postalCode, setPostalCode], colSize: 6 },
	    { id: 'city', label: 'City', state: [city, setCity], colSize: 6 },
		{
		  id: 'region',
		  label: 'Region',
		  state: [region, setRegion],
		  colSize: 12,
		  type: 'select',
		  options: provincesPhilippines
		},
	    { id: 'phone', label: 'Phone', state: [phone, setPhone], colSize: 12 },
	  ];

  return (
    <Form
      autocomplete="off"
      style={{ border: '1px solid black', padding: '20px', margin: '20px 0px', borderRadius: '10px' }}
      onSubmit={addAddress}
    >
      <h1 className="my-account pb-3">New Address</h1>
      <Row>
        {formFields.map(({ id, label, state, colSize, type, options }) => {
          const [value, setValue] = state;
          return (
            <Col md={colSize} key={id}>
              <Form.Group controlId={id}>
                <Form.Label className="loginSub">{label}</Form.Label>
                {type === 'select' ? (
                  <Form.Select
                    className="loginText my-1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <Form.Control
                    className="loginText my-1"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                  />
                )}
              </Form.Group>
            </Col>
          );
        })}
      </Row>
      <CustomBlkButton
        label="Add Address"
        type="submit"
        variant="black"
        customClass="px-5 mt-3"
      />
    </Form>
  );
};

export default RegisterAddress;
