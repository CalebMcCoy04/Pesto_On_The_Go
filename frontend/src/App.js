import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
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
