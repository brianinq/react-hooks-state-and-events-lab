import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? [...items] : items.filter((item) => item.category === category);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
