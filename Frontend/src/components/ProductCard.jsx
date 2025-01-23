import React from "react";
import axios from "axios";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    axios.post("http://localhost:8080/api/cart/add", {
      productId: product.id,
      quantity: 1,
      totalPrice: product.price,
    });
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
