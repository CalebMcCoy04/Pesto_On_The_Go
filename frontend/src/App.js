import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Item from './components/Item'
import Order from './components/Order'
function App() {

  const [currentUser, setCurrentUser] = useState('')
  useEffect(()=>{
    fetch('/auth')
    .then(r => {
      if(r.ok){
        r.json().then(user => setCurrentUser(user))
      }
    })
  },[])
console.log(currentUser)
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
          <Route path="/item" element={<Item setCurrentUser={setCurrentUser}/>}/>
          
          <Route path='/Order' element={<Order setCurrentUser={setCurrentUser}/>}/>        
        </Routes>
    </div>
  );
}

export default App;
