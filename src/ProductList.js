// src/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Name: {product.tshirtName}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity Available: {product.quantityAvailable}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
