import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

import UserContext from '../UserContext'
import Swal from 'sweetalert2';

export default function Register() {
	// Initializes the use of properties from the UserProvider in App.js file
	const { user, setUser } = useContext(UserContext)
	const [ email, setEmail] = useState('')
	const [ password, setPassword ] = useState('')
	
	// Initialize useNavigate
	const navigate = useNavigate()

	// For determining if button is disabled or not
	const [isActive, setIsActive] = useState(false)

	const retrieveUser = (token) => {
		//fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
		fetch(`http://localhost:8001/users/details`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			console.log('This is result:')
			console.log(result)

			// Store the user details retrieved from the token into the global user state
			setUser({
				id: result._id,
				isAdmin: result.isAdmin
			})
		})
	}


	function authenticate(event) {
	    event.preventDefault();
	    

	    fetch(`http://localhost:8001/users/login`, {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            email: email,
	            password: password
	        })
	    })
	    .then(response => response.json())
	    .then(result => {
	        if(typeof result.accessToken !== "undefined") {
	            localStorage.setItem('token', result.accessToken);

	            retrieveUser(result.accessToken);

	            Swal.fire({
	                title: 'Login Successful!',
	                text: 'Welcome to TIT4N 24!',
	                confirmButtonColor: '#3b444b',
	                confirmButtonText: 'OK!'
	            });

	        } else {
	            Swal.fire({
	                title: 'Authentication Failed!',
	                text: "Incorrect email or password!",
	                confirmButtonColor: '#ff0000',
	                confirmButtonText: 'Again!'
	            });
	        }
	    })
	}


	useEffect(() => {
	  if (email !== '' && password.length >= 8) {
	    // Guarantees that the email is not blank and password is 8 characters or more
	    // Enables the submit button if the form data has been verified
	    setIsActive(true);
	  } else {
	    setIsActive(false);
	  }
	}, [email, password]);


	return (
		
		(user.id !== null) ?
		<Navigate to="/account"/>
	  	: 
		<Container>
		    <Row className="w-100">
		      <Col xs={12} md={6} lg={4} className="mx-auto">
				  <Form onSubmit={event => authenticate(event)}>
				    <h1 className="loginTitle">LOGIN</h1>
				    <Form.Group controlId="userEmail">
				      <Form.Label className="loginSub">Email</Form.Label>
				      <Form.Control 
				        className="loginText my-2"
				        type="email" 
				        placeholder="Email Address"
				        value={email} 
				        onChange={event => setEmail(event.target.value)}
				        required
				      />
				    </Form.Group>

				    <Form.Group controlId="password1">
				      <Form.Label className="loginSub">Password</Form.Label>
				      <Form.Control 
				        className="loginText mb-4"
				        type="password" 
				        placeholder="Password" 
				        value={password} 
				        onChange={event => setPassword(event.target.value)}
				        required
				      />
				    </Form.Group>

				    { isActive ? 
				      <Button className="btnWhite px-5" variant="dark" type="submit" id="submitBtn">
				        SIGN IN
				      </Button>
				      :
				      <Button className=" px-5" variant="dark" type="submit" id="submitBtn" disabled>
				        SIGN IN
				      </Button>

				    }

				    <Form.Group className="py-3">
				      <Link to="/register" className="btnBlack text-decoration-none">Register</Link>
				      <Link to="/recover" className="btnBlack1 text-decoration-none">Forgot Password?</Link>
				    </Form.Group>
				  </Form>
				</Col>
			</Row>
		</Container>
	)
}