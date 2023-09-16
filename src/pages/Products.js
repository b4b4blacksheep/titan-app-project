import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import {useEffect, useState} from 'react'
// import courses_data from '../data/courses' <- WE DON'T NEED ANYMORE

export default function Products(){
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// Sets the loading state to true
		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/products/active-products`)
		.then(response => response.json())
		.then(result => {
			setProducts(
				result.map(product => {
					return (
						<ProductCard key={product._id} product={product}/>
					)
				})
			)

			// Sets the loading state to false
			setIsLoading(false)
		})
	}, [])

	return(
		(isLoading) ?
			<Loading/>
		:
			<>
				{products}
			</>
	)
}
