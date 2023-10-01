import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CustomBlkButton from '../components/CustomBlkButton';
import Breadcrumbs from '../components/Breadcrumb';
const ProductCard = lazy(() => import('../components/ProductCard'));

const Brands = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [ brandProducts, setBrandProducts ] = useState({}); // To hold products by brand
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ visibleCount, setVisibleCount ] = useState(4); 
  const [ visibleBrandCount, setVisibleBrandCount ] = useState(4); 

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Brands', path: '/collections/brands' },
  ];

  const brandNames = ["Adidas", "Anta", "Jordan", "NewEra", "Nike", "NikeNBA", "NikeSportswear", "Puma", "Slam", "Titan" ];

  useEffect(() => {
    setIsLoading(true);
    Promise.all(
      brandNames.map((brand) =>
        axios.get(`http://localhost:8001/brands/${brand.toLowerCase()}`)
      )
    )
      .then((responses) => {
        const newBrandProducts = {};
        responses.forEach((response, index) => {
          newBrandProducts[brandNames[index]] = response.data;
        });
        setBrandProducts(newBrandProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
    setVisibleBrandCount(prevCount => prevCount + 4);
  };

  const renderProducts = (brandTitle) => {
    const products = brandProducts[brandTitle] || [];

    return (
      <Row className="pb-5">
        <h1 className="brandTitle" data-aos="fade-up">{brandTitle}</h1>
        {isLoading ? (
          <div className="center-loading" data-aos="fade-up">Loading...</div>
        ) : error ? (
          <div className="center-loading" data-aos="fade-up">Error: {error.message}</div>
        ) : (
          <Suspense fallback={<div>Loading product...</div>}>
            {products.slice(0, visibleCount).map((product, index) => (
              <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Suspense>
        )}
      </Row>
    );
  };

  return (
     <Container>
      <Breadcrumbs crumbs={crumbs} />
      {brandNames.slice(0, visibleBrandCount).map((brand) => renderProducts(brand))}
      {!isLoading && !error && 
       (brandNames.length > visibleBrandCount || 
        brandNames.some(brand => (brandProducts[brand] || []).length > visibleCount)) && (
        <Row>
          <Col xs={12} className="d-flex justify-content-center pb-5">
            <CustomBlkButton 
              label="Load more products" 
              customClass="button-blk" 
              onClick={loadMore}
              variant="black" 
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Brands;
