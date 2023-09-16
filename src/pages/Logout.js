import { Navigate} from 'react-router-dom'
import UserContext from '../UserContext'
import{useEffect, useContext} from 'react'

export default function Logout(){
	const {unsetUser, setUser} = useContext(UserContext)
	// localStorage.clear()


	//Using the context , clear the contents of the local storage 
	unsetUser()



	//An effect which removes the user email from the global user state that comes from the context
	useEffect(() => {
		setUser({
			id:null
		})
	}, [])

	return(
		<Navigate to = "/login"/>

	)
} 