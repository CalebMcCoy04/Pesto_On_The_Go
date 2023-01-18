import React from 'react'

function ItemHolder({item}) {
    console.log(item)
    return(
        <div className='card'>
            <div><h2>{item.name}</h2></div>
        </div>
    )
}
export default ItemHolder