import React from "react";
import "./DeliveryItem.css";
function DeliveryItem({ item }) {
  return (
    <div style={{display:""}}>
      <div className="delivery-item-cover cursor-point">
        <img
          src={item.cover}
          className="delivery-item-image"
          alt={item.title}
        />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
}

export default DeliveryItem;
