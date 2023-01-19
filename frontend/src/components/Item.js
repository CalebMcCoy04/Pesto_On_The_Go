import { useEffect} from 'react'
import ItemHolder from './ItemHolder';

function Item({items, setItems}) {


useEffect(()=>{
    fetch('/items')
    .then(r => {
        if(r.ok){
            r.json().then(data =>
                setItems(data))
            }
        })
},[])
// console.log(items)
    return(
        <>
        <h1>Items:</h1>
            
                <ul id="item-holder">
                    {items.map(item =>  <ItemHolder item={item} key={item.id}/>)}
                </ul>
            
        </>
    )
}
export default Item