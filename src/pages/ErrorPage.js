import { Link } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<>
			<h1>THIS IS ERROR PAGE</h1>
			<p>Oops! This page don't exist!</p>
			<Link to="/home">Get back to homepage</Link>
		</>
	)
}