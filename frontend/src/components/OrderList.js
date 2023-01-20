import {useState, useEffect} from 'react'
import OrderListHolder from './OrderListHolder';

function OrderList(){
    const [orderList, setOrderList] = useState([]);
useEffect(()=> {
    fetch('/item_orders')
    .then(r => {
        if(r.ok){
            r.json().then(data =>
               
                setOrderList(data)
                )
        }
    })
},[])

    return(
    <>
        <h1>Order List:</h1>
            
                <ul className='order-list'>
                    {orderList.map(order => <OrderListHolder setOrderList={setOrderList} order={order} key={order.id}/>)}
                </ul>
            
    </>
 )   
}
export default OrderList