import { useState, useEffect } from 'react';
import { Row, Col, ToggleButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom'



export default function SizeSelect() {

	const { productId } = useParams();
	const [radioValue, setRadioValue] = useState('1');
	const [sizes, setSizes] = useState([]);

	console.log(radioValue)

	useEffect(() => {
	  fetch(`http://localhost:8001/products/${productId}`)
	    .then(response => response.json())
	    .then(result => {
	    	console.log(result);
	      // Assuming result.sizes is an array of arrays
	      // Flatten it to a single array containing size objects
	      const flattenedSizes = result.sizes.flat().map(s => ({
	        name: s.size,
	        value: s._id,
	        quantity: s.quantity,
	      }));
	      setSizes(flattenedSizes);
	    })
	    .catch(error => console.error('Error fetching product sizes:', error));
	}, [productId]);

	const chunkArray = (arr, chunkSize) => {
	  const tempArray = [];
	  for (let index = 0; index < arr.length; index += chunkSize) {
	    const chunk = arr.slice(index, index + chunkSize);
	    tempArray.push(chunk);
	  }
	  return tempArray;
	};

	const chunkedSizes = chunkArray(sizes, 4);


	  return (
	  	<>
	  	  {chunkedSizes.map((chunk, rowIndex) => (
	  	    <Row key={rowIndex} className="mx-1 mb-1">
	  	      {chunk.map((size, colIndex) => (
	  	        <Col key={colIndex} xs={3} style={{ padding: '2.5px' }}>
	  	          <ToggleButton
	  	            id={`radio-${rowIndex}-${colIndex}`}
	  	            variant="dark"
	  	            type="radio"
	  	            name="radio"
	  	            value={size.value}
	  	            checked={radioValue === size.value}
	  	            onChange={(e) => setRadioValue(e.currentTarget.value)}
	  	            className="w-100"  // Full-width
		            style={{
		              borderRadius: '0',
		              backgroundColor: radioValue === size.value ? '#ff2424' : 'black'
		            }}
		            disabled={size.quantity === 0}  // Disable the button if quantity is 0
	  	          >
	  	            {size.quantity === 0 ? <s>{size.name}</s> : size.name}
	  	          </ToggleButton>
	  	        </Col>
	  	      ))}
	  	    </Row>
	  	  ))}
	  	</>
	  );

}