import React, { useContext, useState, useEffect } from "react";
import {Table, Button, Alert, Accordion, Card, Row, Col, Container } from "react-bootstrap";
import {useParams, Navigate, useNavigate, Link} from "react-router-dom";
import UserContext from "../UserContext";

import Swal from 'sweetalert2'

// export default function Order(){

// 	const {user} = useContext(UserContext)

// 	return(
// 		(user.isAdmin) ?
// 		<>
// 		<>
// 		<h1 className="loginTitle">ADMIN DASHBOARD</h1>
// 		<h6 className="adminTitle">Version.20221023.1.1.01</h6>
// 		<h6 className="adminTitle">ADMIN ONLY PAGE</h6>
//         </>
// 		<div className="text-center py-3">
//     		<Alert key="dark" variant="dark">
//     			<h1>ORDER PANEL</h1>
//     		</Alert>
//     	</div>
// 			<Table>
// 		     <thead>
// 		       <tr>
// 		         <th>ORDER ID</th>
// 		         <th>USER ID</th>
// 		         <th>PRODUCT NAME</th>
// 		         <th>DATE OF PURCHASE</th>
// 		         <th>TOTAL AMOUNT</th>
// 		       </tr>
// 		     </thead>
// 		     <tbody>
// 		     </tbody>
// 		   </Table>

// 		   <h6 className="text-center">OPSSS!</h6>
// 		   <h6 className="text-center">WE HAVE A LITTLE PROBLEM</h6>
// 		   <h6 className="text-center">PLEASE CONTACT ADMIN.</h6>
// 		</>
// 		:
// 		<Navigate to="/home" />
// 	)
// }

export default function Orders(){

	const {user} = useContext(UserContext)

	const [allOrders, setAllOrders] = useState([])

	const fetchData = () => {
		//fetch(`${process.env.REACT_APP_API_URL}/orders/user-order`,{
		fetch(`http://localhost:8001/orders/active-orders`,{
			method: "GET",
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setAllOrders(data.map(order => {
				return(
					<tr key={order._id}>
						<td>{order._id}</td>
						<td>-PRODUCT NAME HERE-</td>
						<td className="text-center">1</td>
						<td>{order.totalAmount}</td>
						<td>{order.purchasedOn}</td>
					</tr>
				)
			}))

		})
	}

	useEffect(()=>{
		
		fetchData();
	}, [])

	return(
		(user.isAdmin)
		?
		<>
			<Navigate to="/login" />
		</>
		:
		<>
			<div className="mt-5 mb-3 text-center">
				<h1>CART</h1>
			</div>
			<Table bordered>
		     <thead>
		       <tr>
		         <th>Orders ID</th>
		         <th>Product Name</th>
		         <th>Quantity</th>
		         <th>Total Amount</th>
		         <th>Date Ordered</th>
		       </tr>
		     </thead>
		     <tbody>
		       {allOrders}
		     </tbody>
		   </Table>
		</>

	)
}