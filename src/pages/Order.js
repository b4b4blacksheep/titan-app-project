import { useContext, useState, useEffect } from "react"
import {Table, Button, Alert, Modal} from "react-bootstrap"
import {useParams, Navigate, Link} from "react-router-dom"
import UserContext from "../UserContext"


export default function Orders(){

	const {user} = useContext(UserContext)

	const [allOrders, setAllOrders] = useState([])

	const fetchData = () => {
		fetch(`${process.env.REACT_APP_API_URL}/orders/user-order`,{
			method: "GET",
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(result => result.json())
		.then(data => {
			console.log(data);

			setAllOrders(data.map(order => {
				return(
					<tr key={order._id}>
						<td>{order._id}</td>
						<td>{order.userId}</td>
						<td className="text-center">1</td>
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
		         <th>Users</th>
		         <th>Quantity</th>
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
