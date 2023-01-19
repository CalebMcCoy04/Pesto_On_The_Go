import {useState, useEffect} from 'react'
import OrderList from './OrderList';
function Order({currentUser, setOrders, orders}) {
    const [user, setUser] = useState(currentUser);
    const [formData, setFormData] = useState({
        user_id:user.id
    });

    useEffect(() => {
        setUser(currentUser);
        setFormData({...formData, user_id:currentUser.id});
    }, [currentUser]);
    

    function onSubmit(e) {
        e.preventDefault()
        fetch('/orders',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok)
            r.json().then(data => {
                setOrders([...orders, data])
        })})
    }
    console.log(orders)

    return(
        <>
            <h1>Orders</h1>
            <form onSubmit={onSubmit}>
                <input type="hidden" name="user_id" value={formData.user_id} />
                <button type="submit">Create Order</button>
            </form>
            <OrderList/>
        </>
    )
}
export default Order
