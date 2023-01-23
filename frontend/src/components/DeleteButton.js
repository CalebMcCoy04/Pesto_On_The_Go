
import {useState} from 'react'

export const DeleteButton = ({id, setOrderList}) =>{
    const [deleting, setDeleting] = useState(false)

    const handleDelete = () => {
        setDeleting(true)
        fetch(`/delete-orders/${id}`, {
            method: 'DELETE'
        })
        .then(r=>{
            if(r.ok){
                    fetch('/orders')
                    .then(r => {
                        if(r.ok){
                            r.json().then(data =>
                                setOrderList(data)
                            )
                        }
                    })
                }
            setDeleting(false)    
            })
        }
    return(
        <button className='delete-orders-button' onClick={handleDelete}> 
            {deleting ? 'Deleting...' : 'Delete Order'}
        </button>
    )
}