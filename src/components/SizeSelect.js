import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

import '../assets/size-select/styles.css';

import CustomBlkButton from '../components/CustomBlkButton';

export default function SizeSelect({ setSelectedSize }) {

  const { productId } = useParams();
  const [radioValue, setRadioValue] = useState('1');
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8001/products/${productId}`)
      .then(response => response.json())
      .then(result => {
        const flattenedSizes = result.sizes.flat().map(s => ({
          name: s.size,
          value: s.size,
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
              <CustomBlkButton
                label={size.quantity === 0 ? <s>{size.name}</s> : size.name}
                onClick={() => {
                  setRadioValue(size.value);
                  setSelectedSize(size.value);
                }}
                type="button"
                disabled={size.quantity === 0}
                variant={radioValue === size.value ? 'black' : 'white'}
                customClass="w-100 brandName"
              />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}
