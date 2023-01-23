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
    <div className='main-order-div'>
        <h1>Orders</h1>
            
                <div className='order-list'>
                    {orderListAll.map(order => <OrderListHolder setOrderList={setOrderListAll} order={order} key={`order${order.id}`}/>)}
                </div>
            
    </div>
 )   
}
export default OrderList