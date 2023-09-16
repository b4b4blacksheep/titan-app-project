import {useState, useEffect} from 'react'
import {Button, Row, Col, Card, Alert, CardGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function ProductCard({product}){

	// De-structuring the props
	const {name, description, price, _id} = product

	// Using the state
	// Initialize a 'count' state with a value of zero (0)
	const [count, setCount] = useState(0)

	// Activity 'slots' state
	// const [slot, setSlot] = useState(15)

	const [isOpen, setIsOpen] = useState(true)

	// Effects in React is just like side effects/effects in real life, where every time something happens within the component, a function or condition runs.
	// You may also Listen or watch a specific state for changes instead of watching/listening to the whole component

	return(
			//<Card className="cardHighlight" style={{ width: '18rem' }}>
			<Card className="productHighlight">
			    <Card.Body className="text-left">
			        <Card.Title>{name}</Card.Title>
				        <Card.Subtitle className="mb-2 text-muted">Description:</Card.Subtitle>
					        <Card.Text>
					         {description}
					        </Card.Text>
			        	<Card.Subtitle className="mb-2">Price:</Card.Subtitle>
					        <Card.Text>
					        {price} PHP
					        </Card.Text>
					    <Card.Subtitle className="mb-2">Size Available:</Card.Subtitle>
					        <Link className="btnWhite btn btn-dark mx-1" to={`/products/${_id}`}>1SIZE</Link>
			    </Card.Body>
			    <Link className="btnWhite btn btn-dark" to={`/products/${_id}`}>Details</Link>
			</Card>
	)
}


// For validation purposes
// For added layer of protection
// Prop Types can be used to validate the data coming from the props. You can define each property of the prop and assign specific validation for each of them.
ProductCard.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}
