import React, { useContext, useState, useEffect } from "react";
import {Table, Button, Alert, Accordion } from "react-bootstrap";
import {useParams, Navigate, Link} from "react-router-dom";
import UserContext from "../UserContext";


import Swal from "sweetalert2";

export default function AdminPage(){

	const {productId} = useParams();
	const {user} = useContext(UserContext);
	const [allProducts, setAllProducts] = useState([]);

	const [name, setProductName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState("")


	const getData = () =>{
		
		fetch(`${process.env.REACT_APP_API_URL}/products/`,{
			headers:{
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(response => response.json())
		.then(data => {

			setAllProducts(data.map(product => {

				return(
					<tr key={product._id}>
						<td className="adminText">{product._id}</td>
						<td className="adminBody">{product.name}</td>
						<td className="adminBody">{product.description}</td>
						<td className="adminBody">{product.price}</td>
						<td className="adminBody">{product.isActive ? 
							"Active"
							: 
							"Inactive"}</td>
						<td>
				{
					(user.isAdmin) ?
						
					 	<>
						<Button className="btnAdmin px-5 mx-1 my-1"  size="sm" variant="secondary" onClick ={() => deleteProduct(product._id)}>DELETE</Button>
						<Button className="btnAdmin btn-block px-5 mx-1 my-1"  size="sm" variant="dark" onClick ={() => undoDeleteProduct(product._id)}>RETURN</Button>
						<Button className="btnAdmin px-5 mx-1 my-1" size="sm" variant="danger" as={Link} to={`/${product._id}/update-product`}>UPDATE</Button>
						</>
					:
						<>
						</>
				}
						</td>
					</tr>
				)
			}))

		})
	}

	// DELETE/ARCHIVE PRODUCT
	const deleteProduct = (productId, productName) =>{

		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/archive-product`,{
			method: "PATCH",
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				isActive: false
			})
		})
		.then(response => response.json())
		.then(data =>{
			console.log(data);

			if(data){
				Swal.fire({
					title: "Archive Succesful!",
					icon: "success",
					text: `Product is now unavailable.`
				})
				getData();
			}
			else{
				Swal.fire({
					title: "Archive Unsuccessful!",
					icon: "error",
					text: `Something went wrong. Please try again later!`
				})
			}
		})
	}

	// AVAILABILITY OF THE PRODUCT
	const undoDeleteProduct = (productId, productName) =>{

		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/archive-product-availability`,{
			method: "PATCH",
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				isActive: true
			})
		})
		.then(response => response.json())
		.then(data =>{
			console.log(data);

			if(data){
				Swal.fire({
					title: "Availability Succesful!",
					icon: "success",
					text: `Product is now available!`
				})
				getData();
			}
			else{
				Swal.fire({
					title: "Availability Unsuccessful!",
					icon: "error",
					text: `Something went wrong. Please try again later!`
				})
			}
		})
	}

	// UPDATE PRODUCT [STILL NOT WORKING!]
	// const updateProduct = (productId, productName) => {
	// 	fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/update-product`,{
	// 		method: "PATCH",
	// 		headers:{
	// 			"Content-Type": "application/json",
	// 			"Authorization": `Bearer ${localStorage.getItem('token')}`
	// 		},
	// 		body: JSON.stringify({
	// 			name: name,
	// 			description: description,
	// 			price: price
	// 		})
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		if (data){
	// 			Swal.fire({
	// 				title: "Updated Succesful!",
	// 				icon: "success",
	// 				text: `Product is now updated.`
	// 			})
	// 			getData()
	// 		} else{
	// 			Swal.fire({
	// 				title: "Update Unsuccessful!",
	// 				icon: "error",
	// 				text: `Something went wrong. Please try again later!`
	// 			})
	// 		}
	// 	})
	// }

	useEffect(()=>{	
		getData();
	}, [])

	return(
		(user.isAdmin) ?
		<>
		<>
		<h1 className="loginTitle">ADMIN DASHBOARD</h1>
		<h6 className="adminTitle">Version.20221023.1.1.01</h6>
		<h6 className="adminTitle">ADMIN ONLY PAGE</h6>
        </>
		<div className="text-center py-3">
    		<Alert key="dark" variant="dark">
    			<h1>INVENTORY TABLE</h1>
    		</Alert>
    	</div>
				<Accordion className="my-2" defaultActiveKey="0">
				      <Accordion.Item eventKey="0">
				        <Accordion.Header>DELETE BUTTON</Accordion.Header>
				        <Accordion.Body className="adminBody text-center">
				        	Delete Button, this enables the selected product to delete the item from the website's database. The "Deleted Product" will still be in the ADMIN - Inventory Table but will not be seen in the TIT4N | 24 SHOP. 
				        </Accordion.Body>
				      </Accordion.Item>
				      <Accordion.Item eventKey="1">
				        <Accordion.Header>RETURN BUTTON</Accordion.Header>
				        <Accordion.Body className="adminBody text-center">
				        	Return Button, this enables the selected product to be returned from the website's database. The "Returned Product" will now be available in the TIT4N | 24 SHOP
				        </Accordion.Body>
				      </Accordion.Item>
				       <Accordion.Item eventKey="2">
				        <Accordion.Header>UPDATE BUTTON</Accordion.Header>
				        <Accordion.Body className="adminBody text-center">
				        	Update Button, this enables the selected product to be edited from the website's database. The "Updated Product" will now be updated & available in the TIT4N | 24 SHOP
				        </Accordion.Body>
				      </Accordion.Item>
				    </Accordion>
			<Table>
		     <thead>
		       <tr>
		         <th>PRODUCT ID</th>
		         <th>PRODUCT NAME</th>
		         <th>DESCRIPTION</th>
		         <th>PRICE</th>
		         <th>AVAILABILITY</th>
		         <th>ACTION</th>
		       </tr>
		     </thead>
		     <tbody>
		       { allProducts }
		     </tbody>
		   </Table>
		</>
		:
		<Navigate to="/login" />
	)
}

