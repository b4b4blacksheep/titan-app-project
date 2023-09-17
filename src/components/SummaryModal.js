import React, { useState, useContext } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

import '../assets/summary-modal/styles.css';

import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function SummaryModal({ show, onHide, formData, sizes, isOnSale, imageLinks, clearAllFields }) {

  const { user, setUser } = useContext(UserContext)

  const linkOnlyArray = imageLinks.map(item => item.link);

  const handleConfirm = () => {
      
      fetch(`http://localhost:8001/products/create-product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          name: formData.productName,
          brand: formData.productBrand,
          color: formData.productColor,
          sku: formData.productSKU,
          description: formData.productDescription,
          price: formData.productPrice,
          category: formData.productCategory,
          status: formData.productStatus,
          imageLinks: linkOnlyArray,
          sizes: sizes,
          isOnSale: isOnSale,
          onSaleValue:formData.onSaleValue
        })
      })
      .then(response => response.json())
      .then(result => {
        console.log(result)
          if (result.message === 'New product successfully created!' || result.message == 'New product successfully created!') {
            Swal.fire({
                title: 'Product successfully added!',
                text: 'Item should now be available.',
                confirmButtonColor: '#3b444b',
                confirmButtonText: 'OK!'
            });

            onHide();
          } else {
            Swal.fire({
                title: 'An Error Occur!',
                text: "Please check the product information.",
                confirmButtonColor: '#ff0000',
                confirmButtonText: 'OK!'
            });
          }
      })
      .catch(error => {
          console.error('An error occurred while creating the product:', error);
      });
    }

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Product Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td className="adminText">{formData.productName}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td className="adminText">{formData.productBrand}</td>
            </tr>
            <tr>
              <td>SKU</td>
              <td className="adminText">{formData.productSKU}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td className="adminText">{formData.productCategory}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td className="adminText">{formData.productColor}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td className="adminText">{formData.productDescription}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className="adminText">{formData.productStatus}</td>
            </tr>
            <tr className="text-danger">
              <td>On-Sale Value</td>
              <td className="adminText fw-bold">{formData.onSaleValue}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td className="adminText">{formData.productPrice}</td>
            </tr>
            <tr>
              <td>Image Links</td>
              <td>
                <ul>
                  {imageLinks && imageLinks.map((imageLink, index) => (
                    <li className="adminText" key={index}>{imageLink.link}</li>
                  ))}
                </ul>
              </td>
            </tr>

          </tbody>
        </Table>
        <h4>Sizes</h4>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr key={index}>
                <td className="adminText">{size.size}</td>
                <td className="adminText">{size.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Modal.Body>

      <Modal.Footer>
        <Button 
          variant="dark" 
          onClick={() => { 
            handleConfirm(); 
            clearAllFields(); 
            onHide();
          }} 
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}