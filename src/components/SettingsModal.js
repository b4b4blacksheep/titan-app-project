import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import { PiUserLight, PiShoppingCartLight, PiMagnifyingGlassThin, PiPlus } from "react-icons/pi";
import { useNavigate, Navigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import './style.css';


import { Link, NavLink } from 'react-router-dom';
import { useState, useContext,useEffect } from 'react'
import UserContext from '../UserContext'

export default function SettingsModal(){

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [imageLinks, setImageLinks] = useState([{ id: 0, link: "" }]);

	const addImageLink = () => {
		const newLink = { id: imageLinks.length, link: "" };
		setImageLinks([...imageLinks, newLink]);
	};

	const handleChange = (e, index) => {
		const { value } = e.target;
		const list = [...imageLinks];
		list[index]["link"] = value;
		setImageLinks(list);
	};

	const [showSummary, setShowSummary] = useState(false); 
	const [productData, setProductData] = useState({ imageLinks: [], sizes: [ { size: "", quantity: ""}] }); // Store product data

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

	const [ sizes, setSizes ] = useState([{ id: 1, size: '', quantity: 0 }]);
	console.log(sizes)

	const isButtonDisabled = !formData.productName || !formData.productBrand || !formData.productCategory || !formData.productColor || !formData.productSKU || !formData.productStatus || !formData.productDescription || !formData.productPrice;
		
		const navigate = useNavigate()

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

	const handleInputChange = (e) => {
	  const { name, value } = e.target;
	  setFormData({
	    ...formData,
	    [name]: value
	  });
	};

	const handleCloseSummary = () => {
		
		//fetch(`http://localhost:8001/products/create-product`, {
		fetch(`http://localhost:8001/products/create-product`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				name: formData.productName,
				brand: formData.productBrand,
				color: formData.productColor,
				category: formData.productCategory,
				description: formData.productDescription,
				sku: formData.productSKU,
				price: formData.productPrice,
				status: formData.productStatus,
				imageLinks: productData.imageLinks,
				size: productData.size
			})
		})
		.then(response => response.json())
		.then(result => {

			console.log(result);

					setFormData('');
					setProductData('');

				if(result){
					Swal.fire({
						title: "Completed",
						icon: "success",
						text: "Product successfully added!"
					})
					navigate('/')

				} else {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again."
					})
				}
		})
		setShowSummary(false)
	} 

	const handleShowSummary = () => {

		if (!formData.productName || !formData.productBrand || !formData.productCategory || !formData.productSKU || !formData.productStatus || !formData.productColor || !formData.productDescription || !formData.productPrice) {
	    	alert('All fields are required.');
	    return;
	  }

	  setShow(false);
	  setProductData(formData); // Update the productData
	  setShowSummary(true);
	  const newProductData = {
	      ...formData,
	      imageLinks: imageLinks.map(item => item.link),
	      sizes: sizes.map(item => item.size),
	      sizes: sizes.map(item => item.quantity)

	  };
	  setProductData(newProductData);
	  console.log()
	};



	  return (
	    <>
	    	<PiPlus title="Add Products" onClick={handleShow} color="#1B1C1E" size="2em" />

	    	<Modal show={show} onHide={handleClose} size="lg"
	    	  aria-labelledby="contained-modal-title-vcenter"
	    	  centered>
	    	  <Modal.Header closeButton>
	    	    <Modal.Title>Create Products</Modal.Title>
	    	  </Modal.Header>
	    	  <Modal.Body>
	    	  <Form>

				<Form.Group className="mb-3" controlId="productName">
				<Form.Label>Name*<span className="required"> required</span></Form.Label>
				<Form.Control name="productName" value={formData.productName} autoComplete="off" onChange={handleInputChange} required type="text" className="adminText" placeholder="Enter product name" autoFocus />
				</Form.Group>

				<Form.Group className="mb-3" controlId="productBrand">
				<Form.Label>Brand*<span className="required"> required</span></Form.Label>
				<Form.Control name="productBrand" value={formData.productBrand} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Enter brand" />
				</Form.Group>

				<Form.Group className="mb-3">
				  <Form.Label>Category <span className="required"> required</span></Form.Label>
				  <Form.Control
				    as="select"
				    name="productCategory"
				    autoComplete="off"
				    value={formData.productCategory}
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
				      {(formData.productCategory === 'Footwear') && (
				        <Form.Control
				          as="select"
				          required
				          className="adminText"
				          value={inputField.size}
				          onChange={(e) => handleSizeChange(e, index)}
				          style={{ width: '40%' }}
				        >
				          <option disabled value="">Select Size</option>
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

				      {(formData.productCategory === 'Apparel') && (
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

				      {(formData.productCategory === 'Accessories') && (
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
				        style={{ width: '40%' }}
				      />
				      <Button variant="outline-danger" onClick={() => removeSize(index)}>Remove</Button>
				    </div>
				  ))}

				  <Button variant="outline-dark" onClick={addSize}>Add More</Button>
				</Form.Group>

				<Form.Group className="mb-3" controlId="productSKU">
				<Form.Label>SKU*<span className="required"> required</span></Form.Label>
				<Form.Control name="productSKU" value={formData.productSKU} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Enter SKU" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="productStatus">
				<Form.Label>Status<span className="required"> required</span></Form.Label>
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
			        <Form.Control name="productColor" value={formData.productColor} autoComplete="off" onChange={handleInputChange} type="text" className="adminText" required placeholder="Enter color" />
			      </Form.Group>

				<Form.Group className="mb-3" controlId="productDescription">
				<Form.Label>Description*<span className="required"> required</span></Form.Label>
				<Form.Control name="productDescription" value={formData.productDescription} onChange={handleInputChange} className="adminText my-2" as="textarea" required rows={3} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="productPrice">
				<Form.Label>Price*<span className="required"> required</span></Form.Label>
				<Form.Control name="productPrice" value={formData.productPrice} autoComplete="off" onChange={handleInputChange} type="number" className="adminText" required placeholder="Enter price" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInputImages">
				<Form.Label>Image Links*<span className="required"> required</span></Form.Label>
				{imageLinks.map((inputField, index) => (
				<Form.Control
					key={inputField.id}
					type="text"
					required
					autoComplete="off"
					className="adminText my-2"
					placeholder={`Enter Image Link ${index + 1}`}
					value={inputField.link}
					onChange={(e) => handleChange(e, index)}
				/>
				))}
				</Form.Group>

				<Button variant="outline-dark" onClick={addImageLink}>Add more image links</Button>

					</Form>
	    	  </Modal.Body>
	    	  <Modal.Footer>
	    	    <Button variant="dark" onClick={handleShowSummary} disabled={isButtonDisabled}>
	            Create Product
	          </Button>
	    	  </Modal.Footer>
	    	</Modal>

	    	<Modal show={showSummary} onHide={handleCloseSummary} size="lg" centered>
	    	  <Modal.Header closeButton>
	    	    <Modal.Title>Product Summary</Modal.Title>
	    	  </Modal.Header>
	    	  <Modal.Body>
	    	    {productData ? (
	    	      <>
	    	        <table className="table table-striped">
	    	          <tbody>
	    	            <tr>
	    	              <th>Name:</th>
	    	              <td className="adminText">{productData.productName}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Brand:</th>
	    	              <td className="adminText">{productData.productBrand}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Category:</th>
	    	              <td className="adminText">{productData.productCategory}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>SKU:</th>
	    	              <td className="adminText">{productData.productSKU}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Status:</th>
	    	              <td className="adminText">{productData.productStatus}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Color:</th>
	    	              <td className="adminText">{productData.productColor}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Description:</th>
	    	              <td className="adminText">{productData.productDescription}</td>
	    	            </tr>
	    	            <tr>
	    	              <th>Price:</th>
	    	              <td className="adminText">₱ {productData.productPrice}</td>
	    	            </tr>
	    	          </tbody>
	    	        </table>

    	        <strong>Size & Quantity:</strong>
	    	        <ul className="list-unstyled">
	    	          {productData.sizes && productData.sizes.map((link, index) => (
	    	            <li className="adminText" key={index}>{link}</li>
	    	          ))}
	    	        </ul>
	    	        <strong>Size & Quantity:</strong>
	    	        <ul className="list-unstyled">
	    	          {productData.sizes && productData.sizes.map((sizeObj, index) => (
	    	            <li className="adminText" key={index}>Size: {sizeObj.size}, Quantity: {sizeObj.quantity}</li>
	    	          ))}
	    	        </ul>


	    	        <strong>Image Links:</strong>
	    	        <ul className="list-unstyled">
	    	          {productData.imageLinks && productData.imageLinks.map((link, index) => (
	    	            <li className="adminText" key={index}>{link}</li>
	    	          ))}
	    	        </ul>
	    	      </>
	    	    ) : (
	    	      <p>Loading...</p>
	    	    )}
	    	  </Modal.Body>
	    	  <Modal.Footer>
	    	    <Button variant="dark" onClick={handleCloseSummary}>Save</Button>
	    	  </Modal.Footer>
	    	</Modal>

	    </>

	  );
}