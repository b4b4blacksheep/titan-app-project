import { useState, useEffect } from 'react'
import { Modal, Form, Alert } from 'react-bootstrap';
import { PiPlus, PiPlusBold } from "react-icons/pi";
import { RiCloseCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

import SummaryModal from '../components/SummaryModal';

import '../assets/admin/styles.css';

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
	   const newSize = { id: sizes.length + 1, size: '', quantity: 5 };
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
		onSaleValue: '',
	});

	const [ isOnSale, setIsOnSale ] = useState(false);

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

	useEffect(() => {
	  if (formData.productStatus === "On-Sale") {
	    setIsOnSale(true);
	  } else {
	    setIsOnSale(false);
	  }
	}, [formData.productStatus]);

	const generateOptions = () => {
	  const options = [];
	  for (let i = 1; i <= 22; i += 0.5) {

	    // Youth sizes 1-5 with "Y"
	    if (i >= 1 && i <= 5) {
	      options.push(<option key={`${i}Y`} value={`${i}Y`}>{`${i}Y`}</option>);
	    }

	    // Women's sizes 4-15 with "W" in front
	    if (i >= 4 && i <= 15) {
	      options.push(<option key={`W${i}`} value={`W ${i}`}>{`W ${i}`}</option>);
	    }

	    // Standard sizes 1-22
	    options.push(<option key={i} value={i}>{i}</option>);
	  }
	  return options;
	};

	return (
		<>
		<PiPlus title="Add Products1" onClick={handleShow} color="#1B1C1E" size="2em" />

		<SummaryModal
		  show={showSummary}
		  onHide={() => setShowSummary(false)}
		  formData={formData}
		  sizes={sizes}
		  isOnSale={isOnSale}
		  imageLinks={imageLinks}
		  clearAllFields={clearAllFields}
		/>

		<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
		<Modal.Header closeButton>
			<Modal.Title className="loginTitle">Create Products</Modal.Title>
		</Modal.Header>
		
		<Modal.Body>
		<Form>

		{show && (
		  <Alert variant="danger">
		    <Alert.Heading className="loginSub fw-bold">Reminder!</Alert.Heading>
		    <p className="m-0 loginText text-">
		      All input labels containing an asterisk (*) are required fields.
		    </p>
		  </Alert>
		)}

		<Form.Group className="mb-3" controlId="productName">
		<Form.Label className="inputLabel">Name<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productName" value={formData.productName} autoComplete="off" onChange={handleInputChange} required type="text" className="inputType" placeholder="Enter product name" autoFocus />
		</Form.Group>

{/*		<Form.Group className="mb-3" controlId="productBrand">
		<Form.Label className="inputLabel">Brand<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productBrand" value={formData.productBrand} autoComplete="off" onChange={handleInputChange} type="text" className="inputType" required placeholder="Enter brand" />
		</Form.Group>*/}
		<Form.Group className="mb-3" controlId="productBrand">
		  <Form.Label className="inputLabel">Brand<span className="inputRequired">*</span></Form.Label>
		  <Form.Control className="inputType" as="select" name="productBrand" value={formData.productBrand} onChange={handleInputChange} required>
		    <option value="" disabled>Select a brand</option>
		    <option className="inputType" value="Nike">Nike</option>
		    <option className="inputType" value="Jordan">Jordan</option>
		    <option className="inputType" value="Adidas">Adidas</option>
		    <option className="inputType" value="Anta">Anta</option>
		    <option className="inputType" value="Mitchell & Ness">Mitchell & Ness</option>
		    <option className="inputType" value="New Era">New Era</option>
		    <option className="inputType" value="Nike NBA">Nike NBA</option>
		    <option className="inputType" value="Nike Sportswear">Nike Sportswear</option>
		    <option className="inputType" value="Puma">Puma</option>
		  </Form.Control>
		</Form.Group>


		<Form.Group className="mb-3" controlId="productCategory">
		<Form.Label className="inputLabel">Category<span className="inputRequired">*</span></Form.Label>
		<Form.Control
		as="select"
		name="productCategory"
		autoComplete="off"
		value={formData.productCategory}
		onChange={handleInputChange}
		className="inputType"
		required
		>
		<option value="" disabled>Select Category</option>
		<option className="inputType" value="Apparel">Apparel</option>
		<option className="inputType" value="Footwear">Footwear</option>
		<option className="inputType" value="Accessories">Accessories</option>
		<option className="inputType" value="Others">Others</option>
		</Form.Control>

		<Form.Label className="mt-3 inputLabel">Size and Quantity<span className="inputRequired">*</span></Form.Label>
		<br/>
		{sizes.map((inputField, index) => (
			<div key={inputField.id} className="d-flex align-items-center my-2">
			{(formData.productCategory === 'Footwear') && (
				<Form.Control
				as="select"
				required
				className="inputType"
				value={inputField.size}
				onChange={(e) => handleSizeChange(e, index)}
				style={{ width: '50%' }}
				>
				<option disabled value="">Select Size</option>
					{generateOptions()}
				</Form.Control>
				)}

			{(formData.productCategory === 'Apparel') && (
				<Form.Control
				as="select"
				required
				className="inputType"
				value={inputField.size}
				onChange={(e) => handleSizeChange(e, index)}
				style={{ width: '40%' }}
				>
				<option disabled value="">Select Size</option>
				<option value="XS">XS</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				<option value="2XL">2XL</option>
				<option value="3XL">3XL</option>
				<option value="4XL">4XL</option>
				<option value="5XL">5XL</option>
				<option value="6XL">5XL</option>
				</Form.Control>
				)}

			{(formData.productCategory === 'Accessories') && (
				<Form.Control
				as="select"
				required
				className="inputType"
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
			className="inputType mx-2"
			placeholder={`Enter Quantity ${index + 1}`}
			value={inputField.quantity}
			onChange={(e) => handleQuantityChange(e, index)}
			style={{ width: '50%' }}
			/>

			<RiCloseCircleLine size={32} color="#000000" onClick={() => removeSizeQuantity(index)} style={{ cursor: 'pointer' }} />

			</div>
			))}
		</Form.Group>
			<div style={{ textAlign: 'center' }}>
			  <PiPlusBold size={24} color="#000" onClick={addSizeQuantity} style={{ cursor: 'pointer' }} />
			</div>

			<hr/>

		<Form.Group className="mb-3" controlId="productSKU">
		<Form.Label className="inputLabel">SKU<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productSKU" value={formData.productSKU} autoComplete="off" onChange={handleInputChange} type="text" className="inputType" required placeholder="Enter SKU" />	
		</Form.Group>

		<Form.Group className="mb-3" controlId="productStatus">
        <Form.Label className="inputLabel">Status<span className="inputRequired">*</span></Form.Label>
        <Form.Control
          as="select"
          name="productStatus"
          autoComplete="off"
          value={formData.productStatus}
          onChange={handleInputChange}
          className="inputType"
          required
        >
          <option value="" disabled>Select Status</option>
          <option className="inputType" value="Stock">Stock</option>
          <option className="inputType" value="On-Sale">On Sale</option>
          <option className="inputType" value="Heat">Heat</option>
          <option className="inputType" value="Rare">Rare</option>
          <option className="inputType" value="Others">Others</option>
        </Form.Control>
      </Form.Group>

      {isOnSale && (
        <Form.Group className="mb-3" controlId="onSaleValue">
          <Form.Label className="inputLabel">On-Sale Value<span className="inputRequired">*</span></Form.Label>
          <Form.Control
            type="text"
            name="onSaleValue"
            autoComplete="off"
            value={formData.onSaleValue}
            onChange={handleInputChange}
            className="inputType"
            required
          />
        </Form.Group>
      )}

		<Form.Group className="mb-3" controlId="productColor">
		<Form.Label className="inputLabel">Color<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productColor" value={formData.productColor} autoComplete="off" onChange={handleInputChange} type="text" className="inputType" required placeholder="Enter color" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="productDescription">
		<Form.Label className="inputLabel">Description<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productDescription" value={formData.productDescription} onChange={handleInputChange} className="inputType my-2" as="textarea" required rows={8} />
		</Form.Group>

		<Form.Group className="mb-3" controlId="productPrice">
		<Form.Label className="inputLabel">Price<span className="inputRequired">*</span></Form.Label>
		<Form.Control name="productPrice" value={formData.productPrice} autoComplete="off" onChange={handleInputChange} type="number" className="inputType" required placeholder="Enter price" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="exampleForm.ControlInputImages">
		<Form.Label className="inputLabel">Image Links<span className="inputRequired">*</span></Form.Label>
		{imageLinks.map((inputField, index) => (
			<div key={inputField.id} className="d-flex align-items-center my-2">
			<Form.Control
			type="text"
			required
			autoComplete="off"
			className="inputType mx-2"
			placeholder={`Enter Image Link ${index + 1}`}
			value={inputField.link}
			onChange={(e) => handleChange(e, index)}
			/>
			<RiCloseCircleLine size={28} color="#000000" onClick={() => removeImageLink(index)} style={{ cursor: 'pointer' }} />

			</div>
			))}
		</Form.Group>
		<div style={{ textAlign: 'center' }}>
		  <PiPlusBold size={24} color="#000" onClick={addImageLink} style={{ cursor: 'pointer' }} />
		</div>

		</Form>
		</Modal.Body>

		<Modal.Footer>
		    <div className="flex-center">  {/* Assuming you have a flex-center class for centering */}
		      <RiCheckboxCircleFill
		        size={30}  // Adjust the size as you like
		        color={!isFormValid() ? 'gray' : 'green'}  // Change the color if disabled
		        onClick={isFormValid() ? handleCreateProduct : null}
		        style={{ cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
		      />
		    </div>
		</Modal.Footer>
		</Modal>
		</>

		);
}
