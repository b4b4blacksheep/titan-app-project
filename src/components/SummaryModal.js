import React from 'react';
import { Modal, Table } from 'react-bootstrap';
import { RiCheckboxCircleFill } from 'react-icons/ri';


import '../assets/admin/styles.css';

import Swal from 'sweetalert2';

export default function SummaryModal({ show, onHide, formData, sizes, isOnSale, imageLinks, clearAllFields }) {

  const linkOnlyArray = imageLinks.map(item => item.link);

  const handleConfirm = () => {

      fetch(`${process.env.REACT_APP_API_URL}/products/create-product`, {
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
          if (result.message === 'New product successfully created!' || result.message === 'New product successfully created!') {
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
        <Modal.Title className="tableLabel text-dark">Product Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Table striped bordered hover>
          <thead>
            <tr className="tableLabel">
              <th>Field</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="summaryLabel">Name</td>
              <td className="summaryType">{formData.productName}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Brand</td>
              <td className="summaryType">{formData.productBrand}</td>
            </tr>
            <tr>
              <td className="summaryLabel">SKU</td>
              <td className="summaryType">{formData.productSKU}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Category</td>
              <td className="summaryType">{formData.productCategory}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Color</td>
              <td className="summaryType">{formData.productColor}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Description</td>
              <td className="summaryType">{formData.productDescription}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Status</td>
              <td className="summaryType">{formData.productStatus}</td>
            </tr>
            {/* Conditionally render On-Sale Value row */}
            {formData.productStatus === 'On-Sale' && (
              <tr className="text-danger">
                <td className="summaryLabel">On-Sale Value</td>
                <td className="summaryType fw-bold">{formData.onSaleValue}</td>
              </tr>
            )}
            <tr>
              <td className="summaryLabel">Price</td>
              <td className="summaryType">{formData.productPrice}</td>
            </tr>
            <tr>
              <td className="summaryLabel">Image Links</td>
              <td>
                <ul>
                  {imageLinks && imageLinks.map((imageLink, index) => (
                    <li className="summaryType" key={index}>{imageLink.link}</li>
                  ))}
                </ul>
              </td>
            </tr>

          </tbody>
        </Table>
        <Table striped bordered hover>
          <thead>
            <tr className="tableLabel">
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr key={index}>
                <td className="summaryType">{size.size}</td>
                <td className="summaryType">{size.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Modal.Body>

      <Modal.Footer>
        <RiCheckboxCircleFill 
          size={30} 
          color="green"
          onClick={() => { 
            handleConfirm(); 
            clearAllFields(); 
            onHide();
          }} 
        />
      </Modal.Footer>
    </Modal>
  );
}