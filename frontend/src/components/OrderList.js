import {useState, useEffect} from 'react'
import OrderListHolder from './OrderListHolder';

function OrderList(){
    const [orderListAll, setOrderListAll] = useState([]);
    useEffect(()=> {
        fetch('/orders')
        .then(r => {
            if(r.ok){
                r.json().then(data =>
                    
                    setOrderListAll(data)
                    )
            }
        })
    },[])
    console.log(orderListAll)
    return(
    <>
        <h1>Order List:</h1>
            
                <ul className='order-list'>
                    {orderListAll.map(order => <OrderListHolder setOrderList={setOrderListAll} order={order} key={order.id}/>)}
                </ul>
            
    </>
 )   
}
export default OrderList