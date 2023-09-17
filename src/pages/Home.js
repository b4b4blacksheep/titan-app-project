import React, { useContext } from 'react';

import UserContext from '../UserContext';

import Landing from '../components/Landing';
import Adidas from '../components/Adidas';
import Banner from '../components/Banner';
import NewArrivals from '../components/NewArrivals.js';
import FeaturedCollections from '../components/FeaturedCollections.js';
import Sale from '../components/Sale.js';
import AdminPanel from '../components/AdminPanel';

export default function Home(){

	const { user, setUser } = useContext(UserContext)

	console.log(user);

	return (
	<div>
		{user.isAdmin === null ? (
			<>
			  <Landing />
			  <NewArrivals />
			  <FeaturedCollections />
			  <Adidas />
			  <Sale />
			  <Banner />
			</>
		) : (
			<AdminPanel />
		)}
		</div>
	);
}

