import { useContext } from "react";
import { Alert, Accordion } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function User(){

	const { user } = useContext(UserContext)

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
    			<h1>USER SETTINGS</h1>
    		</Alert>
    	</div>
    		<Accordion className="my-2" defaultActiveKey="0">
    		      <Accordion.Item eventKey="0">
    		        <Accordion.Header>What is User Settings?</Accordion.Header>
    		        <Accordion.Body className="adminBody text-center">
    		        	User Settings, is where admin can change the user status of a registered email. 
    		        </Accordion.Body>
    		      </Accordion.Item>
    		    </Accordion>
    		<h6 className="text-center">OPSSS!</h6>
    		<h6 className="text-center">WE HAVE A LITTLE PROBLEM</h6>
    		<h6 className="text-center">PLEASE CONTACT ADMIN.</h6>
		</>
		:
		<Navigate to="/home" />
	)
}
