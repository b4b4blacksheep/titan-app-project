import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function CheckEmail() {

	const {user, setUser} = useContext(UserContext)
	const [email, setEmail] = useState('')
	
	// Initialize useNavigate
	const navigate = useNavigate()

	// For determining if button is disabled or not
	const [isActive, setIsActive] = useState(false)

	function authenticate(event){
		event.preventDefault()
		
		fetch(`${process.env.REACT_APP_API_URL}/users/check-email`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(response => response.json())
		.then(result => {
			setEmail('')

			if(result === true){
				Swal.fire({
					title: "Confirmation Email Sent!",
					icon: "success",
					text: "Welcome to TIT4N | 24!"
				})
			} else {
				Swal.fire({
					title: "Email doesn't exist!",
					icon: "error",
					text: "Please input a valid email!"
				})
			}
		})
	}

	useEffect(() => {
		if((email !== '')){
			// Enables the submit button if the form data has been verified
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [ email ]) 

	return (
		(user.id !==null) ?
		<Navigate to="/account"/>
		: 
		<Container>
			<Row className="w-100">
				<Col xs={12} md={8} lg={5} className="mx-auto">
					<Form onSubmit={event => authenticate(event)}>
						<h1 className="loginTitle">RESET YOUR PASSWORD</h1>	
						<h4 className="loginText">We will send you an email to reset your password.</h4>	
					   <Form.Group controlId="userEmail">
					        <Form.Label className="loginSub">Email</Form.Label>
						        <Form.Control 
						            className="loginText mb-4"
						            type="email" 
						            placeholder="Enter..."
						            value={email} 
						            onChange={event => setEmail(event.target.value)}
						            required
						        />
					        </Form.Group>

			            <Button className="btnWhite1 px-5 m-1" variant="dark" type="submit" id="submitBtn">
					            	SUBMIT
					    </Button>
					    <Button className="btnWhite1 px-5 m-1" variant="outline-dark" type="submit" id="submitBtn">
					            	CANCEL
					    </Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}