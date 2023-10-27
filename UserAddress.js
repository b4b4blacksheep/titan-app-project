import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';

import '../assets/admin-panel/styles.css';

const apiUrl = process.env.REACT_APP_API_URL;

const DeleteAddress = async (addressId, token) => {
  try {
    const config = {
      headers: {
          'Authorization': `Bearer ${token}`,
          'addressId': addressId,
        },
    };

    //const response = await axios.delete("http://localhost:8001/users/remove-address",
    const response = await axios.delete(`${apiUrl}/users/remove-address`,
      config
    );
    console.log(response)

    return response.data;
  } catch (error) {
    throw error;
  }
};

const UserAddress = ({ token, addedNew, setAddedNew }) => {

	const [primaryAddressChanged, setPrimaryAddressChanged] = useState(false);
	const [primaryAddressInfo, setPrimaryAddressInfo] = useState({});
	const [secondaryAddresses, setSecondaryAddresses] = useState([]);

  useEffect(() => {
      // Fetch the addresses here
        //axios.get('http://localhost:8001/users/address', {
      axios.get(`${apiUrl}/users/address`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const primary = response.data.find((address) => address.isPrimary);
          const secondary = response.data.filter((address) => !address.isPrimary);

          if (primary) {
            setPrimaryAddressInfo(primary);
            setSecondaryAddresses(secondary);
          }
        })
        .catch((error) => {
          //console.error('There was an error:', error);
        });
    }, [primaryAddressChanged, addedNew]);

  const DeleteAddress = async (addressId, token) => {
    try {
      const config = {
        headers: { 'Authorization': `Bearer ${token}` },
        data: { addressId: addressId }, // include the addressId in the request body
      };

      // const response = await axios.delete("http://localhost:8001/users/remove-address", config);
      const response = await axios.delete(`${apiUrl}/users/remove-address`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = async (id) => {
    //console.log("Trying to delete address with ID:", id); // Debugging line
    try {
      await DeleteAddress(id, token);
      setPrimaryAddressChanged(!primaryAddressChanged);
      setAddedNew(!addedNew);  // Updating addedNew state to trigger useEffect
    } catch (error) {
      // Handle the error here
    }
  };


  return (
    <Col lg={3} md={4} sm={12} className="main-section text-center-sm">
      <AddressBlock {...primaryAddressInfo} isDefault onDelete={() => handleDelete(primaryAddressInfo._id)} />
      {secondaryAddresses.map((address, index) => (
        <AddressBlock key={index} {...address} onDelete={() => handleDelete(address._id)} />
      ))}
    </Col>
  );
};

const AddressBlock = ({ firstName, lastName, address, apartment, postal, city, country, phone, _id, isDefault, onDelete }) => (
	<div className="text-center-sm">
	  {firstName ? ( // Check if firstName or another required field exists
	    <>
	      <h1 className={`loginSub pt-lg-3 ${isDefault ? 'fw-bold' : ''} text-center-sm`}>
	        {firstName} {lastName} {isDefault ? '(Default)' : ''}
	      </h1>
	      <p className="primaryAdd">{address}</p>
	      <p className="primaryAdd">{apartment}</p>
	      <p className="primaryAdd">{postal} {city}</p>
	      <p className="primaryAdd">{country}</p>
	      <p className="primaryAdd">{phone}</p>
	      <p className="primaryAdd fw-bold text-center" style={{ cursor: "pointer" }} onClick={onDelete}>Delete</p>
	    </>
	  ) : (
	    <>
	    </>
	  )}
	</div>

);

export default UserAddress;