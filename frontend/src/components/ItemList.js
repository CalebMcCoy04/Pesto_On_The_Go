import {useState, useEffect} from 'react'

function ItemList({setFormData, formData}) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        fetch('/items')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, []);

    function handleSelect(item_id) {
        setFormData({...formData, item_id});
        setSelectedItem(item_id);
    }

    return (
        <>
            <label>Select Item:</label>
            <select value={selectedItem} onChange={e => handleSelect(e.target.value)}>
                <option value={[]}>Select an item</option>
                {items.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </>
    )
}

export default ItemList
