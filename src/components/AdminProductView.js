import { useState, useEffect, useContext } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MdEditDocument, MdDeleteForever } from "react-icons/md";

import InnerImageZoom from 'react-inner-image-zoom'

import UserContext from '../UserContext';

import AddToCart from '../components/AddToCart';
import UpdateModal from '../components/UpdateModal';
import SizeSelect from '../components/SizeSelect';

import Sale from '../components/Sale';

import '../assets/admin-product-view/styles.css';



export default function AdminProductView() {

	const { productId } = useParams()

	const { user } = useContext(UserContext)

	const navigate = useNavigate();

	const [showUpdateModal, setShowUpdateModal] = useState(false);

	const handleUpdateClick = () => {
	  setShowUpdateModal(true);
	};

	const [ name, setName ] = useState("");
	const [ brand, setBrand ] = useState("");
	const [ SKU, setSKU ] = useState("");
	const [ color, setColor ] = useState("");
	const [ imageLinks, setImageLinks ] = useState([]);
	const [ description, setDescription] = useState("");
	const [ price, setPrice ] = useState(0);
	const [ onSalePrice, setOnSalePrice ] = useState(0);
	const [ category, setOnCategory ] = useState('');

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		//fetch(`http://localhost:8001/products/${productId}`)
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
			setOnCategory(result.category)
			
		})
	}, [productId])

	useEffect(() => {
	  if (!user.isAdmin) {
	    navigate("/login");
	  }
	}, [user, navigate]);

	const [productDetails, setProductDetails] = useState({
	   name: '',
	   brand: '',
	   color: '',
	   description: '',
	   price: 0,
	   sku: '',
	   image: null,
	 });

	const [isEditing, setIsEditing] = useState({
	  name: false,
	  color: false,
	  price: false,
	});

	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setProductDetails({
	    ...productDetails,
	    [name]: value,
	  });
	};

	const handleImageUpload = (e) => {
	  const file = e.target.files[0];
	  setProductDetails({
	    ...productDetails,
	    image: file,
	  });
	};

	const handleSubmit = (e) => {
	  e.preventDefault();
	  // Perform API call to save the product
	  // For demonstration purposes, logging to console
	  console.log(productDetails);
	};

	return(
		<>
		<Container>
			<Row> 
			    <Col xs={12} md={6}>
			      <div className="image-container">
				      <InnerImageZoom
				        src={imageLinks[0]}
				        alt={name}
				        zoomSrc={imageLinks[0]}
				        className="img-fluid my-2"
				      />
			      </div>
			    </Col>
			    <Col xs={12} md={6}>
			      <div>
			        <div className="flex-container">
			          <h2 className="text-secondary">{brand}</h2>
			          <div className="admin-icons">
			            <MdEditDocument onClick={handleUpdateClick} />
			            <MdDeleteForever />
			          </div>
			        </div>
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
		            <Row className="pb-5">
		            	<SizeSelect />
		            </Row>
					</div>
				</Col>
			</Row>
		</Container>

		{showUpdateModal && (
		<UpdateModal 
			show={showUpdateModal} 
			onHide={() => setShowUpdateModal(false)} 
			productData={{ name, brand, SKU, color, imageLinks, description, price, onSalePrice, category }}
			/>
		)}
		</>

	)
}