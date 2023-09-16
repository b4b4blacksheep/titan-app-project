import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

import { useNavigate, Navigate } from 'react-router-dom'

import UserContext from '../UserContext'

export default function AddProductForm() {

    const navigate = useNavigate()

    const { user } = useContext(UserContext)
    console.log(user);

    const [isLoading, setIsLoading] = useState(false);

    // UseState for the Field Types
    const [formData, setFormData] = useState({
        productName: '',
        productBrand: '',
        productCategory: '',
        productColor: '',
        productSKU: '',
        productDescription: '',
        productPrice: '',
        productStatus: '',
    });
    const [imageLinks, setImageLinks] = useState([{ id: 0, link: "" }]);

    // Initial state for sizes (it can be an empty array if you prefer)
    const [sizes, setSizes] = useState([
      { size: '', quantity: 0 },
    ])

    const addImageLink = () => {
        const newLink = { id: imageLinks.length, link: "" };
        setImageLinks([...imageLinks, newLink]);
    };


    const [otherCategory, setOtherCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleChange = (e, index) => {
        const { value } = e.target;
        const list = [...imageLinks];
        list[index]["link"] = value;
        setImageLinks(list);
    };

    const handleSizeChange = (e, index, field) => {
      const newSizes = [...sizes];
      newSizes[index][field] = e.target.value;
      setSizes(newSizes);
    };

    const addSize = () => {
      setSizes([...sizes, { size: "", quantity: 0 }]);
    };

    // Function to remove a size
    const removeSize = (index) => {
      const newSizes = sizes.filter((_, i) => i !== index);
      setSizes(newSizes);
    };

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);

    const [showAlert, setShowAlert] = useState(false);

    const clearForm = () => {
      setFormData({
        productName: '',
        productBrand: '',
        productCategory: '',
        size: '',
        quantity: '',
        quantity: '',
        productSKU: '',
        productStatus: '',
        productColor: '',
        productPrice: '',
        links: '',
        // ... other fields
      });
    };


    return (
        user.isAdmin ? (
            <>
              <Form className="py-3">
                  <h1 className="py-3 text-center">Add New Product</h1>
                  <Form.Group className="mb-3" controlId="productName">
                      <Form.Label>Name*<span className="required"> required</span></Form.Label>
                      <Form.Control name="productName" value={formData.productName} autoComplete="off" onChange={handleInputChange} required type="text" className="adminText" placeholder="Product name" autoFocus />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productBrand">
                      <Form.Label>Brand*<span className="required"> required</span></Form.Label>
                      <Form.Control name="productBrand" value={formData.productBrand} autoComplete="off" onChange={handleInputChange} required type="text" className="adminText" placeholder="Product brand" autoFocus />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category*<span className="required"> required</span></Form.Label>
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Check
                          type="radio"
                          name="productCategory"
                          value="Apparel"
                          label="Apparel"
                          className="adminText ms-3"
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Check
                          type="radio"
                          name="productCategory"
                          value="Footwear"
                          label="Footwear"
                          className="adminText ms-3"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <Form.Check
                          type="radio"
                          name="productCategory"
                          value="Accessories"
                          label="Accessories"
                          className="adminText ms-3"
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Check
                          type="radio"
                          name="productCategory"
                          value="Others"
                          label="Others"
                          className="adminText ms-3"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Size & Quantity*<span className="required"> required</span></Form.Label>
                    {
                      sizes.map((sizeField, index) => (
                        <Row className="mb-3" key={index}>
                          <Col>
                            <Form.Control 
                              name="size" 
                              value={sizeField.size} 
                              autoComplete="off" 
                              onChange={(e) => handleSizeChange(e, index, 'size')} 
                              type="text" 
                              className="adminText" 
                              required 
                              placeholder="Size" 
                            />
                          </Col>
                          <Col>
                            <Form.Control 
                              name="quantity" 
                              value={sizeField.quantity} 
                              autoComplete="off" 
                              onChange={(e) => handleSizeChange(e, index, 'quantity')} 
                              type="number" 
                              className="adminText" 
                              required 
                              placeholder="Quantity" 
                            />
                          </Col>
                          <Col xs="auto">
                            <Button variant="danger" onClick={() => removeSize(index)}>Remove</Button>
                          </Col>
                        </Row>
                      ))
                    }
                    <br/>
                    <Button variant="outline-dark" onClick={addSize}>Add more sizes</Button>
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="productSKU">
                  <Form.Label>SKU*<span className="required"> required</span></Form.Label>
                  <Form.Control name="productSKU" value={formData.productSKU} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Product SKU" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productStatus">
                  <Form.Label>Status*<span className="required"> required</span></Form.Label>
                  <Form.Control
                      as="select"
                      name="productStatus"
                      autoComplete="off"
                      value={formData.productStatus}
                      onChange={handleInputChange}
                      className="adminText"
                      required
                      >
                      <option value="" disabled>Select Status</option>
                          <option className="adminText" value="On-Sale">On Sale</option>
                          <option className="adminText" value="Heat">Heat</option>
                          <option className="adminText" value="Rare">Rare</option>
                          <option className="adminText" value="Stock">Stock</option>
                          <option className="adminText" value="Others">Others</option>
                  </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productColor">
                    <Form.Label>Color*<span className="required"> required</span></Form.Label>
                    <Form.Control name="productColor" value={formData.productColor} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Product color" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productDescription">
                  <Form.Label>Description*<span className="required"> required</span></Form.Label>
                  <Form.Control name="productDescription" value={formData.productDescription} onChange={handleInputChange} className="adminText my-2" as="textarea" required rows={3} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productPrice">
                  <Form.Label>Price*<span className="required"> required</span></Form.Label>
                  <Form.Control name="productPrice" value={formData.productPrice} autoComplete="off" onChange={handleInputChange} type="number" className="adminText" required placeholder="Product price" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInputImages">
                  <Form.Label>Image Links*<span className="required"> required</span></Form.Label>
                  {imageLinks.map((inputField, index) => (
                  <Form.Control
                      key={inputField.id}
                      type="text"
                      required
                      name="links"
                      autoComplete="off"
                      className="adminText my-2"
                      placeholder={`Product image link ${index + 1}`}
                      value={inputField.link}
                      onChange={(e) => handleChange(e, index)}
                  />
                  ))}
                  </Form.Group>

                  <Button variant="outline-dark" onClick={addImageLink}>Add more image links</Button> 

                <Row>
                    {showAlert && 
                      <Alert className="my-3" variant="danger" onClose={() => setShowAlert(false)} dismissible>
                        All fields must be filled!
                      </Alert>
                    }
                    <Button variant="dark" className="my-3" onClick={() => {
                        // Validation logic here
                        if (
                          formData.productName && 
                          formData.productBrand // ... more conditions
                        ) {
                          handleShow();  // Opens the modal
                          clearForm();  // Clears the form
                          setShowAlert(false); // Hide the alert if it's showing
                        } else {
                          setShowAlert(true); // Show the alert
                        }
                      }}>
                        Create
                      </Button>
                </Row>
              </Form>
            </>
        ) : (
            <div>
                {/* Your default page or message */}
                <h1>You do not have access to this page</h1>
            </div>
        )
    
  );
};

        	  