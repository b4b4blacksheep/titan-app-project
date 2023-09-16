import Landing from '../components/Landing';
import Adidas from '../components/Adidas';
import Banner from '../components/Banner';
import NewArrivals from '../components/NewArrivals.js';
import FeaturedCollections from '../components/FeaturedCollections.js';
import Sale from '../components/Sale.js';

export default function Home(){
	return(
		<>
			<Landing/>
			<NewArrivals/>
			<FeaturedCollections/>
			<Adidas/>
			<Sale/>
			<Banner/>
        </>
	)
}
