import React from "react";
import { DeleteButton } from "./DeleteButton";
function OrderListHolder({order, setOrderList}){
console.log(order.items)
    return(
        
        <div className="order-card">
            <fieldset>
                <li >{order.items.map(item => item.name)}</li>
            </fieldset>
            <DeleteButton setOrderList={setOrderList}id={order.id}/>
        </div>
    )
}
export default OrderListHolder