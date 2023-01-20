import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp({setCurrentUser}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
//   const [errors, setErrors] = useState([]) error handling for later 
  const navigate = useNavigate()
  

  

  function onSubmit(e) {
    e.preventDefault()
    

    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        
            console.log(data)
            setCurrentUser(data)
          navigate('/')
        
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <form className='signUp-form' onSubmit={onSubmit}>
        <label>Username</label>
        <input type='text' name='username'  onChange={handleChange} />

        <label>Email</label>
        <input type='text' name='email'  onChange={handleChange} />

        <label>Password</label>
        <input type='password' name='password'  onChange={handleChange} />

        <input type='submit' value='Sign up!' />
      </form>
      {/* error handling nt */}
    </>
  )
}

export default SignUp