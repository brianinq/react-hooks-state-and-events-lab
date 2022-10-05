import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  const itemClass = cart ? "in-cart" : "";
  const buttonText = cart ? "Remove From Cart" : "Add to Cart";
  function handleCart() {
    setCart((cart) => !cart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
