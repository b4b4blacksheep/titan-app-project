import { Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import UserContext from '../UserContext'
import Swal from 'sweetalert2';

import axios from 'axios';

import CustomBlkButton from '../components/CustomBlkButton';

import '../assets/login/styles.css';

const apiUrl = process.env.REACT_APP_API_URL;

export default function Login() {

	const { user, setUser } = useContext(UserContext)
	const [ email, setEmail] = useState('')
	const [ password, setPassword ] = useState('')
	const [ isActive, setIsActive ] = useState(false)

	const retrieveUser = async (token) => {
	  try {
	    const response = await axios.get(`${apiUrl}/users/details`, {
	      headers: {
	        Authorization: `Bearer ${token}`
	      }
	    });
	    const result = response.data;
	    setUser({
	      id: result._id,
	      isAdmin: result.isAdmin,
	      email: result.email
	    });
	  } catch (error) {
	    console.error('An error occurred while retrieving the user:', error);
	  }
	};

	const authenticate = async (event) => {
	  event.preventDefault();

	  try {
	    const response = await axios.post(`${apiUrl}/users/login`, {
	      email: email,
	      password: password
	    });
	    const result = response.data;

	    if (typeof result.accessToken !== 'undefined') {
	      localStorage.setItem('token', result.accessToken);
	      await retrieveUser(result.accessToken);

	      Swal.fire({
	        title: 'Login Successful!',
	        text: 'Welcome to TIT4N 24!',
	        confirmButtonColor: '#3b444b',
	        confirmButtonText: 'OK!'
	      });

	    } else {
	      Swal.fire({
	        title: 'Authentication Failed!',
	        text: 'Incorrect email or password!',
	        confirmButtonColor: '#ff0000',
	        confirmButtonText: 'Again!'
	      });
	      setEmail('');
	      setPassword('');
	    }

	  } catch (error) {
	    Swal.fire({
	      title: 'Authentication Failed!',
	      text: 'An error occurred!',
	      confirmButtonColor: '#ff0000',
	      confirmButtonText: 'Again!'
	    });
	    console.error('An error occurred during authentication:', error);
	  }
	};

	useEffect(() => {
	  if (email !== '' && password.length >= 8) {
	    setIsActive(true);
	  } else {
	    setIsActive(false);
	  }
	}, [email, password]);


	return (
		
		(user.id !== null) ?
		<Navigate to="/"/>
	  	: 
		<Container>
		    <Row className="w-100">
		      <Col xs={12} md={6} lg={4} className="mx-auto">
				  <Form onSubmit={event => authenticate(event)}>
				    <h1 className="loginTitle pb-4">LOGIN</h1>
				    <Form.Group controlId="userEmail">
				      <Form.Label className="loginSub">Email</Form.Label>
				      <Form.Control 
				      	autoComplete="off"
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
				      	autoComplete="off"
				        className="loginText mb-3"
				        type="password" 
				        placeholder="Password" 
				        value={password} 
				        onChange={event => setPassword(event.target.value)}
				        required
				      />
				    </Form.Group>

				    <CustomBlkButton 
				      label="Sign In"
				      onClick={() => {}}
				      type="submit"
				      disabled={!isActive}
				      variant="black"
				      customClass="px-5" // If you need additional custom classes
				    />

				    <Form.Group className="py-3 d-flex justify-content-between">
				        <Link to="/register" className="text-decoration-none loginText">Register</Link>
				        <Link to="/recover" className="text-decoration-none loginText">Forgot Password?</Link>
				    </Form.Group>
				  </Form>
				</Col>
			</Row>
		</Container>
	)

}
