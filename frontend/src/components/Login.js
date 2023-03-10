import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setCurrentUser}) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    // const [errors, setErrors] = useState([])
    const { username, password } = formData
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        
        const user = {
            username,
            password
        }
        fetch('/login', {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(user)
        })
            .then(r => r.json())
            .then(data => {
                setCurrentUser(data)
                navigate('/Profile')
                console.log(data)
            })
            
            // .then(r => {
            //     if (r.ok) {
            //         r.json().then(user => {
            //             navigate(`/users/${user.id}`)
            //             .then(console.log)
            //         })
            //     } else {
            //         r.json().then(json => setErrors(json.errors))
            //         .then(console.log)
            //     }
            // })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='login-div'>
            <form className='login-form' 
                onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input type='text' 
                name='username' 
                value={username} 
                onChange={handleChange} 
                />

                <label>
                    password
                </label>
                <input type='password' 
                name='password' 
                value={password} 
                onChange={handleChange} 
                />


                <input type='submit' value='Log in!' />
            </form>
        </div>
    )
}
export default Login
