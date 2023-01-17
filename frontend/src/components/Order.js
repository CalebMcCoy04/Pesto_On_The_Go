import {useState, useEffect} from 'react'

function Order({currentUser}) {
    const [formData, setFormData] = useState({
    user_id: currentUser
    })

    function onSubmit(e){
        e.preventDefault()
        setFormData({...formData, user_id:currentUser});
        fetch('/orders',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => console.log(data))
    }

    return(
        <>
            <h1>Orders</h1>
            <form onSubmit={onSubmit}>
                <input type="hidden" name="user_id" value={formData.user_id} />
                <button type="submit">Submit Order</button>
            </form>
        </>
    )
}
export default Order
