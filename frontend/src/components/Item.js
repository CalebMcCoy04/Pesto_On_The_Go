import {useState, useEffect} from 'react'

function Item() {
const [item, setItem] = useState([]);

useEffect(()=>{
    fetch('/items')
    .then(r => r.json())
    .then(data =>
        setItem(data))
},[])
console.log(item)
    return(
        <>
        <h1>Items:</h1>
        </>
    )
}
export default Item