import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login';
import SignUp from './components/SignUp';

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

if(!currentUser)return <Login setCurrentUser={setCurrentUser} />

  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
