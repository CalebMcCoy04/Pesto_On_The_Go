import React, { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";

function OrderListHolder({ order, setOrderList }) {
  

  return (
    <div className="order-card">
    
        <li className="li">
          {order.items.map(item => (
            <p key={`item-${item.id} order-${order.id}`}>
              {item.name} - ${item.price}
            </p>
          ))}
      <p> Total : ${order.total} </p>
      <DeleteButton setOrderList={setOrderList} id={order.id} />
        </li>
      
    </div>
  );
}
export default OrderListHolder;
