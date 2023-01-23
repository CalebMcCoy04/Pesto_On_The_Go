import {useState, useEffect} from 'react'
import OrderList from './OrderList';
import { useNavigate } from 'react-router-dom'



function Order({currentUser, setOrders, orders}) {
    const [user, setUser] = useState(currentUser);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        user_id:user.id
    });

    useEffect(() => {
        setUser(currentUser);
        setFormData({...formData, user_id:currentUser.id});
    }, [currentUser]);
    

    function onSubmit(e) {
        e.preventDefault()
        navigate('/ItemOrder')
    //     // fetch('/orders',{
    //     //     method: 'POST',
    //     //     headers: { 'Content-Type': 'application/json' },
    //     //     body: JSON.stringify(formData)
    //     // })
    //     .then(r => {
    //         if(r.ok)
    //         r.json().then(data => {
    //             setOrders([...orders, data])
    //             navigate('/ItemOrder')
    //     })})
     }
    
    console.log(orders)
    function createOrder(){
             fetch('/orders',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok)
            r.json().then(data => {
                setOrders([...orders, data])
                navigate('/ItemOrder')
        })})
    }
    return(
        <>
            <h1>Orders</h1>
            <form onSubmit={onSubmit}>
                <input type="hidden" name="user_id" value={formData.user_id} />
                <button type="submit">add item to order</button>
            </form>
            <button onClick={createOrder} >Create new Order</button>
            <OrderList/>
        </>
    )
}
export default Order
