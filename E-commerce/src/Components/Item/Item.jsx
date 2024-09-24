import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item opacity-0" id={item.id}>
      <Link to={`/product/${item.id}`}>
        <img
          className="item-img hover:scale-105 transition-all duration-100"
          src={item.image}
        />
      </Link>
      <p className="item-name mt-2">{item.name}</p>
      <div className="price">
        <p className="new-price mr-4">${item.new_price}</p>
        <p className="old-price">${item.old_price}</p>
      </div>
    </div>
  );
};

export default Item;
