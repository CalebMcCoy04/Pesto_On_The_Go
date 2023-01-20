import React from "react";
import { DeleteButton } from "./DeleteButton";
function OrderListHolder({order, setOrderList}){
console.log(order)
    return(
        
        <div className="order-card">
            <fieldset>
                <li >{order.item.name}</li>
            </fieldset>
            <DeleteButton setOrderList={setOrderList}id={order.id}/>
        </div>
    )
}
export default OrderListHolder