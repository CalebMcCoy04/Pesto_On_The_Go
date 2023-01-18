import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Item from './components/Item'
import Order from './components/Order'
import ItemOrder from './components/ItemOrder'
function App() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)
  useEffect(()=>{
    fetch('/auth')
    .then(r => {
      if(r.ok){
        r.json().then(user => setCurrentUser(user))
      }
    })
  },[])
  console.log(orders)
// console.log(currentUser)
if(!currentUser)return(
<>
  
    <Login setCurrentUser={setCurrentUser}/> 
  
  
    <SignUp setCurrentUser={setCurrentUser}/>
</>
)
  return (
    <div className="App">
      <NavBar setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/item" element={<Item items={items} setItems={setItems} setCurrentUser={setCurrentUser}/>}/>
            <Route path='/Order' element={<Order currentUser={currentUser} setOrders={setOrders} orders={orders}/>}/>        
            <Route path='/ItemOrder' element={<ItemOrder items={items} orders={orders}/>}/>
        </Routes>
    </div>
  );
}

export default App;
