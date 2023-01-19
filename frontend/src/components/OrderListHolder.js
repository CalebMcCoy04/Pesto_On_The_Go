import React from "react";

function OrderListHolder({order}){
console.log(order)
    return(
        
        <div className="order-card">
            <fieldset>
                <li >{order.item.name}</li>
            </fieldset>
        </div>
    )
}
export default OrderListHolder