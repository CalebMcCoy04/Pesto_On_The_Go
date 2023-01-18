import {useState} from 'react'

function ItemOrder({orders, items}){
console.log(orders)
console.log(items)
const [formData, setFormData] = useState({
    item_id:'',
    order_id:''
})
console.log(formData)
    function onSubmit(e){
        e.preventDefault()
        fetch('/item_orders',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <select name="order_id" value={formData.order_id} onChange={e => setFormData({...formData, order_id: e.target.value})}>
                    <option value="" disabled>Select an order</option>
                    {orders.map(order => {
                        console.log(order.order.id);
                    return (
                            <option key={order.order.id} value={order.order.id}>{order.order.id}</option>
                            )
                    })}

                </select>
                <select name="item_id" value={formData.item_id} onChange={e => setFormData({...formData, item_id: e.target.value})}>
                    <option value="" disabled>Select an item</option>
                    {items.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <button type="submit">Create Item Order</button>
            </form>
        </>
    )
}
export default ItemOrder