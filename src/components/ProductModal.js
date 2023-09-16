import { Button, Modal, Form } from 'react-bootstrap';
import { PiPlus } from "react-icons/pi";

import SummaryModal from '../components/SummaryModal';

import './style.css';


import { useState } from 'react'

export default function SettingsModal(){

	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [imageLinks, setImageLinks] = useState([{ id: 0, link: "" }]);

	const addImageLink = () => {
		const newLink = { id: imageLinks.length, link: "" };
		setImageLinks([...imageLinks, newLink]);
	};

	const removeImageLink = (index) => {
	   const newLinks = [...imageLinks];
	   newLinks.splice(index, 1);
	   setImageLinks(newLinks);
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

	const handleChange = (e, index) => {
		const { value } = e.target;
		const list = [...imageLinks];
		list[index]["link"] = value;
		setImageLinks(list);
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

    		// handleInputChange, is the way for us to update the value of productName, productBrand, productColor & etc. 	
	const handleInputChange = (e) => { 
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

    		// this is the state hook that waits for the user/admin to fill the form up. 
	const [ formData, setFormData ] = useState({
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

	const isFormValid = () => {
	    if (
	        formData.productName &&
	        formData.productBrand &&
	        formData.productCategory &&
	        formData.productSKU &&
	        formData.productStatus &&
	        formData.productColor &&
	        formData.productDescription &&
	        formData.productPrice &&
	        imageLinks.every((image) => image.link)
	    ) {
	        return true;
	    }
	    return false;
	};

	// Will be use for the SummaryModal
	const [showSummary, setShowSummary] = useState(false);

	const handleCreateProduct = () => {
	  setShow(false); // Close the initial modal
	  setShowSummary(true); // Open the summary modal
	};

	const clearAllFields = () => {
	  setFormData({/* empty object or initial state */});
	  setSizes([]); // Empty array or initial state
	  setImageLinks([]); // Empty array or initial state
	}

	return (
		<>
		<PiPlus title="Add Products1" onClick={handleShow} color="#1B1C1E" size="2em" />

		<SummaryModal
		  show={showSummary}
		  onHide={() => setShowSummary(false)}
		  formData={formData}
		  sizes={sizes}
		  imageLinks={imageLinks}
		  clearAllFields={clearAllFields}
		/>

		<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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

		<Form.Group className="mb-3" controlId="productCategory">
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
				style={{ width: '50%' }}
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
			style={{ width: '50%' }}
			/>
			<Button variant="danger" onClick={() => removeSizeQuantity(index)}>Remove</Button>
			</div>
			))}
		</Form.Group>
		<Button variant="outline-dark" className="my-2" onClick={addSizeQuantity}>Add Size & Quantity</Button>

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
		<Form.Control name="productDescription" value={formData.productDescription} onChange={handleInputChange} className="adminText my-2" as="textarea" required rows={8} />
		</Form.Group>

		<Form.Group className="mb-3" controlId="productPrice">
		<Form.Label>Price*<span className="required"> required</span></Form.Label>
		<Form.Control name="productPrice" value={formData.productPrice} autoComplete="off" onChange={handleInputChange} type="number" className="adminText" required placeholder="Enter price" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="exampleForm.ControlInputImages">
		<Form.Label>Image Links*<span className="required"> required</span></Form.Label>
		{imageLinks.map((inputField, index) => (
			<div key={inputField.id} className="d-flex align-items-center my-2">
			<Form.Control
			type="text"
			required
			autoComplete="off"
			className="adminText mx-2"
			placeholder={`Enter Image Link ${index + 1}`}
			value={inputField.link}
			onChange={(e) => handleChange(e, index)}
			/>
			<Button variant="danger" onClick={() => removeImageLink(index)}>Remove</Button>
			</div>
			))}
		</Form.Group>
		<Button variant="outline-dark" onClick={addImageLink}>Add more image links</Button>


		</Form>
		</Modal.Body>

		<Modal.Footer>
		    <Button variant="dark" disabled={!isFormValid()} onClick={handleCreateProduct}>Create Product</Button>
		</Modal.Footer>
		</Modal>
		</>

		);
}
