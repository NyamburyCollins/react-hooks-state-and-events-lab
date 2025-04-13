import React, { useState } from "react"; 

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    setInCart(inCart => !inCart); // Fixed syntax here
  }

  return (
    <li className={inCart ? "in-cart" : ""}> {}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" : "add"} 
        onClick={handleAddToCart}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;