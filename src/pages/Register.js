import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function Register() {
	// Activity
	const {user, setUser} = useContext(UserContext)
	const navigate = useNavigate()
	// Activity END


	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [mobileNumber, setMobileNumber] = useState('')

	const [agree, setAgree] = useState('')
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')

	// For determining if button is disabled or not
	const [isActive, setIsActive] = useState(false)


	function registerUser(event){
		event.preventDefault()

		//fetch(`${process.env.REACT_APP_API_URL}/users/check-email`, {
		//fetch(`https://titan-api.onrender.com/users/check-email`, {
		fetch(`http://localhost:8001/users/check-email`, {
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
			console.log(result)
			if(result === true) {
				Swal.fire({
					title: 'Oops!',
					icon: 'error',
					text: 'Email already exist!'
				})

				navigate('/login')
			} else {

				//fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
				//fetch(`https://titan-api.onrender.com/users/register`, {
				fetch(`http://localhost:8001/users/register`, {
					method: 'POST',
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						mobileNo: mobileNumber,
						email:email,
						password: password1
					})
				})
				.then(response => response.json())
				.then(result => {

					setEmail('');
					setPassword1('');
					setPassword2('');
					setFirstName('');
					setLastName('');
					setMobileNumber('');
					setAgree('');

					if(result){
						Swal.fire({
							title: 'Register Successful!',
							text: 'You may now login!'
						})
						
						navigate('/login')

					} else {
						Swal.fire({	
							title: 'Registration Failed',
							icon: 'error',
							text: "Tropa, mukang mali ang iyong inilagay! :("
						})
					}		
				})
			}
		})

	}
	
	function authenticate(event){
		event.preventDefault(event)

		localStorage.setItem('email', email)

		setUser({
			email: localStorage.getItem('email')
		})

		setEmail('')

		navigate('/')
	}


	useEffect(() => {
		if((firstName !== '' && lastName !== '' && mobileNumber.length === 11 && email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [firstName, lastName, mobileNumber, email, password1, password2, agree])

	return (
		(user.id !==null) ?
			<Navigate to="/"/>
		:

		<Container>
			<Row className="w-100">
				<Col xs={12} md={8} lg={5} className="mx-auto">
					<Form onSubmit={event => registerUser(event)}>
						<h1 className="loginTitle">Create Account</h1>	
						<Form.Group controlId="firstName">
					        <Form.Label className="loginSub">First Name</Form.Label>
						        <Form.Control
						        	className="loginText my-2" 
						            type="text" 
						            placeholder="First Name"
						            value={firstName} 
						            onChange={event => setFirstName(event.target.value)}
						            required
						        />
					    </Form.Group>

					    <Form.Group controlId="lastName">
					        <Form.Label className="loginSub">Last Name</Form.Label>
						        <Form.Control
						        	className="loginText my-2" 
						            type="text" 
						            placeholder="Last Name"
						            value={lastName} 
						            onChange={event => setLastName(event.target.value)}
						            required
						        />
					    </Form.Group>

					    <Form.Group controlId="mobileNumber">
					        <Form.Label className="loginSub">Mobile Number</Form.Label>
						        <Form.Control
						        	className="loginText my-2" 
						            type="text" 
						            placeholder="Mobile Number"
						            value={mobileNumber} 
						            onChange={event => setMobileNumber(event.target.value)}
						            required
						        />
					    </Form.Group>

					   	<Form.Group controlId="userEmail">
					        <Form.Label className="loginSub">Email address</Form.Label>
						        <Form.Control
						        	className="loginText my-2" 
						            type="email" 
						            placeholder="Email"
						            value={email} 
						            onChange={event => setEmail(event.target.value)}
						            required
						        />
					    </Form.Group>

			            <Form.Group controlId="password1">
			                <Form.Label className="loginSub">Password</Form.Label>
			                <Form.Control 
			                	className="loginText my-2"
				                type="password" 
				                placeholder="Password" 
				                value={password1} 
						        onChange={event => setPassword1(event.target.value)}
				                required
			                />
			            </Form.Group>

			            <Form.Group controlId="password2">
			                <Form.Label className="loginSub">Verify Password</Form.Label>
			                <Form.Control
			                	className="loginText mb-4" 
				                type="password" 
				                placeholder="Verify Password" 
				                value={password2} 
						        onChange={event => setPassword2(event.target.value)}
				                required
			                />
			            </Form.Group>

			            <Form.Group controlId="agree">
				            {['checkbox'].map((type) => (
			                    <div key={`default-${type}`} className="mb-3">
			                      <Form.Check 
			                      	required
			                        label={` I have read and agreed to TIT4N 24's Terms and Conditions.`}
			                      />
			                    </div>
				            ))}
			            </Form.Group>

			            {	isActive ? 
			            		<Button className="btnWhite px-5" variant="dark" type="submit" id="submitBtn">
					            	Submit
					            </Button>
					            :
					            <Button className="btnWhite px-5" variant="dark" type="submit" id="submitBtn" disabled>
					            	Submit
					            </Button>
			            }

				        <Form.Group className="py-3">
					            <a href="/login" class="btnBlack text-decoration-none">Login </a>
					            <a href="/home" class="btnBlack1 text-decoration-none">Return to Store</a>
				        </Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}