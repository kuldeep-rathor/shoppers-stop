// src/App.js
import React, { useState } from 'react';
import './App.css';
import products from './Data';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If it exists, increase the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If it's not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} />
    </div>
  );
}

export default App;
