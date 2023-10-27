import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
    <div className="px-3" data-aos="fade-up">
      <img 
        className="img-fluid my-2" 
        src={product.imageLinks[0]} 
        alt={`${product.name} by ${product.brand}`} 
      />
      <h3 className="text-secondary brandName">{product.brand}</h3>
      <h4 className="productDetails">{product.name}</h4>
      {product.onSaleValue > 0 && (
        <h5 className="productPrice text-danger">₱{product.onSaleValue.toLocaleString('en-US')}.00</h5>
      )}
      {
        product.onSaleValue > 0 
        ? <h6 className="productPrice"><del>₱{product.price.toLocaleString('en-US')}.00</del></h6> 
        : <h5 className="productPrice">₱{product.price.toLocaleString('en-US')}.00</h5>
      }
    </div>
  </Link>
);

export default ProductCard;
