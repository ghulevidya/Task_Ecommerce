import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cart").then((response) => {
      setCartItems(response.data);
    });
  }, []);

  const updateQuantity = (id, quantity) => {
    axios.put("http://localhost:8080/api/cart/update", { id, quantity }).then(() => {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    });
  };

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:8080/api/cart/remove/${id}`).then(() => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    });
  };

  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>{item.productName}</p>
          <div className="cart-controls">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <p>${item.totalPrice.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
