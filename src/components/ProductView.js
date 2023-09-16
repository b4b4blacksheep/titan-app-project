import { useState, useEffect, useContext } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import InnerImageZoom from 'react-inner-image-zoom'

import UserContext from '../UserContext';

import AddToCart from '../components/AddToCart';
import SizeSelect from '../components/SizeSelect';

import Sale from '../components/Sale';

import '../assets/product-view/styles.css';


export default function ProductView() {

	const {productId} = useParams()

	const {user} = useContext(UserContext)

	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [SKU, setSKU] = useState("");
	const [color, setColor] = useState("");
	const [imageLinks, setImageLinks] = useState([]);
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [onSalePrice, setOnSalePrice] = useState(0);

	useEffect(() => {
		//fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		fetch(`http://localhost:8001/products/${productId}`)
		.then(response => response.json())
		.then(result => {
			setImageLinks(result.imageLinks)
			setBrand(result.brand)
			setSKU(result.sku)
			setColor(result.color)
			setName(result.name)
			setDescription(result.description)
			setPrice(result.price)
			setOnSalePrice(result.onSaleValue)
		})
	}, [productId])

	return(
	<>	
		<Container className="mt-5">
			<Row> 
				<Col xs={12} md={6}>
				<>
					<InnerImageZoom
					  src={imageLinks[0]}
					  alt={name}
					  zoomSrc={imageLinks[0]}
					  className="img-fluid my-2"
					/>
				</>
				</Col>
				<Col xs={12} md={6}>
					<div className="pt-lg-5 mt-lg-5">
						<h2 className="text-secondary">{brand}</h2>
						<h1 className="text-dark">{name}</h1>
						<h4 className="text-secondary">{color}</h4>
						<h4 className="text-secondary">{SKU}</h4>
		                <h3 className="text-dark" style={onSalePrice > 0 ? { textDecoration: 'line-through' } : {}}>
		                  ₱{price.toLocaleString('en-US')}.00
		                </h3>
		                {onSalePrice > 0 && (
		                  <h2 className="text-danger">
		                    ₱{onSalePrice.toLocaleString('en-US')}.00
		                  </h2>
		                )}

		                <p className="product-view-p py-lg-3 justify-text-sm">{description}</p>

		            <Row>
		                <Col>
		                	<h4 className="text-dark">Choose a size:</h4>
		                </Col>
		                <Col>
		                	<h4 className="ms-auto text-danger">View Size Chart</h4>
		                </Col>
		            </Row>
		            <Row>
		            	<SizeSelect />
		            </Row>
		            <Row>
		            	{
		            		user.id !== null ?
		            		<>
		            		<Button className="btnWhite btn-dark my-1" variant="primary" onClick={() => AddToCart(productId)} block>
		            		  Add to cart
		            		</Button>
		            		<Link to="/" className="btn btn-outline-dark btnWhite1">BACK</Link>
		            		</>
		            		: 

		            		<Link className="btnWhite btn btn-dark btn-block" to="/login">Login to purchase</Link>
		            	}
		            </Row>
					</div>
				</Col>
			</Row>
		</Container>

		<Sale/>
	</>

	)
}




