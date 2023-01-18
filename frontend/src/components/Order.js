import {useState, useEffect} from 'react'

function Order({currentUser}) {
    const [user, setUser] = useState(currentUser);
    const [formData, setFormData] = useState({
        user_id:user.id
    });

    useEffect(() => {
        setUser(currentUser);
        setFormData({...formData, user_id:currentUser.id});
    }, [currentUser]);
    function onSubmit(e){
    e.preventDefault()
    fetch('/orders',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        
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
