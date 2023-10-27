import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateModal = ({ show, onHide, productData }) => {
  const [updatedData, setUpdatedData] = useState(productData);

  console.log(updatedData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const [ isOnSale, setIsOnSale ] = useState(false);

  const [ sizes, setSizes ] = useState([{ id: 1, size: '', quantity: 0 }]);

  const handleSubmit = () => {
    // Perform the update operation
    console.log('Updated Data:', updatedData);
    onHide();
  };

  const handleSizeChange = (e, index) => {
  	const newSize = [...sizes];
  	newSize[index].size = e.target.value;
  	setSizes(newSize);
  };

  const handleQuantityChange = (e, index) => {
  	const newSize = [...sizes];
  	newSize[index].quantity = e.target.value;
  	setSizes(newSize);
  };

  const addSizeQuantity = () => {
    const newSize = { id: sizes.length + 1, size: '', quantity: 0 };
    setSizes([...sizes, newSize]);
  };

  const removeSizeQuantity = (index) => {
    const newSize = [...sizes];
    newSize.splice(index, 1);
    setSizes(newSize);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name*<span className="required"> required</span></Form.Label>
            <Form.Control 
              type="text" 
              name="name"
              value={updatedData.name} 
              onChange={handleInputChange} 
              className="adminText"
            />
          </Form.Group>

          <Form.Group controlId="productBrand">
          <Form.Label>Brand*<span className="required"> required</span></Form.Label>
          <Form.Control name="brand" value={updatedData.brand} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Enter brand" />
          </Form.Group>

          				<Form.Group className="mb-3" controlId="productCategory">
          				<Form.Label>Category <span className="required"> required</span></Form.Label>
          				<Form.Control
          				as="select"
          				name="productCategory"
          				autoComplete="off"
          				value={updatedData.productCategory}
          				onChange={handleInputChange}
          				className="adminText"
          				required
          				>
          				<option value="" disabled>Select Category</option>
          				<option className="adminText" value="Apparel">Apparel</option>
          				<option className="adminText" value="Footwear">Footwear</option>
          				<option className="adminText" value="Accessories">Accessories</option>
          				<option className="adminText" value="Others">Others</option>
          				</Form.Control>

          				<Form.Label className="mt-3">Size and Quantity<span className="required"> required</span></Form.Label>
          				<br/>
          				{sizes.map((inputField, index) => (
          					<div key={inputField.id} className="d-flex align-items-center my-2">
          					{(updatedData.productCategory === 'Footwear') && (
          						<Form.Control
          						as="select"
          						required
          						className="adminText"
          						value={inputField.size}
          						onChange={(e) => handleSizeChange(e, index)}
          						style={{ width: '50%' }}
          						>
          						<option disabled value="">Select Size</option>
          						<option value="3">3</option>
          						<option value="3">3.5</option>
          						<option value="4">4</option>
          						<option value="4.5">4.5</option>
          						<option value="5.5">5.5</option>
          						<option value="6">6</option>
          						<option value="6.5">6.5</option>
          						<option value="7">7</option>
          						<option value="7.5">7.5</option>
          						<option value="8">8</option>
          						<option value="8.5">8.5</option>
          						<option value="9">9</option>
          						<option value="9.5">9.5</option>
          						<option value="10">10</option>
          						<option value="10.5">10.5</option>
          						<option value="11">11</option>
          						<option value="11.5">11.5</option>
          						<option value="12">12</option>
          						<option value="12.5">12.5</option>
          						<option value="13">13</option>
          						<option value="13.5">13.5</option>
          						<option value="14">14</option>
          						</Form.Control>
          						)}

          					{(updatedData.productCategory === 'Apparel') && (
          						<Form.Control
          						as="select"
          						required
          						className="adminText"
          						value={inputField.size}
          						onChange={(e) => handleSizeChange(e, index)}
          						style={{ width: '40%' }}
          						>
          						<option disabled value="">Select Size</option>
          						<option value="Extra-Small">Extra Small</option>
          						<option value="Small">Small</option>
          						<option value="Medium">Medium</option>
          						<option value="Large">Large</option>
          						<option value="Extra-Large">X-Large</option>
          						<option value="Extra-Extra-Large">XX-Large</option>
          						<option value="Triple-XL">xXX-Large</option>
          						<option value="Four-XL">4-XL</option>
          						<option value="Five-XL">5-XL</option>
          						</Form.Control>
          						)}

          					{(updatedData.productCategory === 'Accessories') && (
          						<Form.Control
          						as="select"
          						required
          						className="adminText"
          						value={inputField.size}
          						onChange={(e) => handleSizeChange(e, index)}
          						style={{ width: '40%' }}
          						>
          						<option disabled value="">Select Size</option>
          						<option value="1-Size">One Size</option>
          						<option value="1-Item">One Piece</option>
          						<option value="Small">Small</option>
          						<option value="Medium">Medium</option>
          						<option value="Large">Large</option>
          						<option value="Extra-Large">X-Large</option>
          						<option value="Extra-Extra-Large">XX-Large</option>
          						<option value="Triple-XL">xXX-Large</option>
          						</Form.Control>
          						)}

          					<Form.Control
          					type="number"
          					required
          					autoComplete="off"
          					className="adminText mx-2"
          					placeholder={`Enter Quantity ${index + 1}`}
          					value={inputField.quantity}
          					onChange={(e) => handleQuantityChange(e, index)}
          					style={{ width: '50%' }}
          					/>
          					<Button variant="danger" onClick={() => removeSizeQuantity(index)}>Remove</Button>
          					</div>
          					))}
          				</Form.Group>
          				<Button variant="outline-dark" className="my-2" onClick={addSizeQuantity}>Add Size & Quantity</Button>

          <Form.Group className="mb-3" controlId="productSKU">
          <Form.Label>SKU*<span className="required"> required</span></Form.Label>
          <Form.Control name="productSKU" value={updatedData.productSKU} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Enter SKU" />	
          </Form.Group>

          <Form.Group className="mb-3" controlId="productStatus">
          <Form.Label>Status<span className="required"> required</span></Form.Label>
          <Form.Control
          as="select"
          name="productStatus"
          autoComplete="off"
          value={updatedData.productStatus}
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

          {isOnSale && (
            <Form.Group className="mb-3" controlId="onSaleValue">
              <Form.Label>On-Sale Value<span className="required"> required</span></Form.Label>
              <Form.Control
                type="text"
                name="onSaleValue"
                autoComplete="off"
                value={updatedData.onSaleValue}
                onChange={handleInputChange}
                className="adminText"
                required
              />
            </Form.Group>
          )}
          
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;

