import { useContext, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import UserContext from "../UserContext";
import {Link} from 'react-router-dom';

import Swal from "sweetalert2";

export default function UpdateUser() {


    

    const { productId } = useParams();

    const {user} = useContext(UserContext);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

  
    
    useEffect(() => {


        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
        .then((response) => response.json())
        .then(data => {
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);

            console.log(data);  
        })
    }, [productId]);



    const updateProduct = async () => {


        let result = await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/update-product`,{
            method:'PATCH',
            body:JSON.stringify(
                {name:name,description:description,price:price}
            ),
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        result = await result.json();


        
    }



    return (
        

        (user.isAdmin) ?
        
        <>
        <div className="text-center py-3">
    		<Alert key="dark" variant="dark">
    			<h1>INVENTORY TABLE</h1>
    		</Alert>
    	</div>
       		<Form  onSubmit = {event => updateProduct(event)}>

	            <Form.Group className="mb-3 loginText" controlId="name">
	              <Form.Label>PRODUCT NAME</Form.Label>
	              <Form.Control type="text" placeholder="Add Product Here" value={name} onChange={event => setName(event.target.value)}/>
	            </Form.Group>

	            <Form.Group className="mb-3 loginText" controlId="description">
				  <Form.Label>PRODUCT DESCRIPTION</Form.Label>
				  <Form.Control placeholder="Add Description Here" as="textarea" rows={5}  value={description} onChange={event => setDescription(event.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3 loginText" controlId="price">
				  <Form.Label>PRICE</Form.Label>
				  <Form.Control type="number" placeholder="Add Price Here" value={price} onChange={event => setPrice(event.target.value)}/>
				</Form.Group>

		      		<Button className="btnWhite px-5 my-3 mx-3" variant="dark" type="submit">
	            		EDIT PRODUCT
	            	</Button>

	            	<Button className="btnWhite1 px-5 my-3" variant="outline-dark" type="submit" to={`/admin/inventory-panel`}>
	            		CANCEL
	            	</Button>

        </Form>
        </>
        
        :
        <>
            <Navigate to="/products" />
        </>
              
        

    )
    
   
}
