import React, { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";

function OrderListHolder({ order, setOrderList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`/orders/${order.id}/total`)
      .then(r => r.json())
      .then(data => {
        setTotal(data.total);
      });
  }, [order.id]);

  return (
    <div className="order-card">
      <fieldset>
        <li>
          {order.items.map(item => (
            <p key={item.id}>
              {item.name} - {item.price}
            </p>
          ))}
        </li>
        
      <p> Total : {total} </p>
      </fieldset>
      <DeleteButton setOrderList={setOrderList} id={order.id} />
    </div>
  );
}
export default OrderListHolder;
