import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import InnerImageZoom from 'react-inner-image-zoom';

import CustomBlkButton from '../components/CustomBlkButton';

import UserContext from '../UserContext';
import AddToCart from '../components/AddToCart';
import SizeSelect from '../components/SizeSelect';
import Sale from '../components/Sale';
import Breadcrumbs from '../components/Breadcrumb';

import '../assets/product-view/styles.css';


export default function ProductView() {

	const { productId } = useParams()
	const { user } = useContext(UserContext)

	const [ name, setName ] = useState("");
	const [ brand, setBrand ] = useState("");
	const [ SKU, setSKU ] = useState("");
	const [ color, setColor ] = useState("");
	const [ imageLinks, setImageLinks ] = useState([]);
	const [ description, setDescription ] = useState("");
	const [ price, setPrice ] = useState(0);
	const [ onSalePrice, setOnSalePrice ] = useState(0);

	const [ selectedSize, setSelectedSize ] = useState("");
	const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

	const handleSizeSelect = (size) => {
	  setSelectedSize(size);
	  setIsButtonDisabled(false); 
	};

	const crumbs = [
	  { name: 'Home', path: '/' },
	  { name: 'Products', path: '/collections/shop-all' },
	  { name: name }
	];

	useEffect(() => {
		//fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		fetch(`http://localhost:8001/products/${productId}`)
			.then(response => response.json())
			.then(result => {
				setImageLinks(result.imageLinks);
				setBrand(result.brand);
				setSKU(result.sku);
				setColor(result.color);
				setName(result.name);
				setDescription(result.description);
				setPrice(result.price);
				setOnSalePrice(result.onSaleValue);
			});
		}, [productId]);
	

	return(
	<>	
		<Container>
		<Breadcrumbs crumbs={crumbs} />
			<Row> 
				<Col xs={12} md={6}>
					<InnerImageZoom
					  src={imageLinks[0]}
					  alt={name}
					  zoomSrc={imageLinks[0]}
					  className="img-fluid my-2"
					/>
				</Col>
				<Col xs={12} md={6}>
					<div className="pt-lg-5 mt-lg-5">
						<h2 className="text-secondary brandName">{brand}</h2>
						<h1 className="text-dark productDetails">{name}</h1>
						<h4 className="text-secondary m-0 brandName">{color}</h4>
						<h4 className="text-secondary brandName">{SKU}</h4>
		                <h3 className="text-dark productPrice" style={onSalePrice > 0 ? { textDecoration: 'line-through' } : {}}>
		                  ₱{price.toLocaleString('en-US')}.00
		                </h3>
		                {onSalePrice > 0 && (
		                  <h2 className="text-danger productPrice">
		                    ₱{onSalePrice.toLocaleString('en-US')}.00
		                  </h2>
		                )}

		                <p className="product-description py-lg-3 justify-text-sm">{description}</p>
		            <Row>
		                <Col>
		                	<h4 className="productDetails">Choose a size:</h4>
		                </Col>
		                <Col>
		                	<h4 className="productDetails">
		                	  <Link to="/pages/size-guide">View Size Chart</Link>
		                	</h4>
		                </Col>
		            </Row>
		            <Row>
		            	<SizeSelect setSelectedSize={handleSizeSelect} />
		            </Row>
		            <Row>
		            { user.id !== null ? (
		              <>
		                <AddToCart selectedSize={selectedSize} productId={productId} user={user} />
		              </>
		            ) : (
		            <>
		            	<Link to="/login">
		            	  <CustomBlkButton 
		            	    label="Login to purchase" 
		            	    customClass="w-100 px-5"
		            	    variant="black" 
		            	  />
		            	</Link>
		            </>
		            )}
		            </Row>
					</div>
				</Col>
			</Row>
		</Container>

		<Sale/>
	</>

	)
}