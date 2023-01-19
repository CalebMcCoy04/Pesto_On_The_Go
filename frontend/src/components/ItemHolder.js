import React from 'react'

function ItemHolder({item}) {
    console.log(item)
    return(
        <div className='card'>
            <fieldset>
            <div><h2>{item.name}</h2></div>
            </fieldset>
        </div>
    )
}
export default ItemHolder