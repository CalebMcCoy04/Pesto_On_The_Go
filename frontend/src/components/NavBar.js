import {NavLink, useNavigate} from 'react-router-dom'

function NavBar({setCurrentUser}) {

    const navigate = useNavigate()
    
    const handleLogOut = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        setCurrentUser('')
        navigate('/login')
    }
    return(
        <div className="navbar">
            
            <h1 className='nav-title'>NavBar</h1>
            <div className='all-nav-links'>
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            <NavLink className='nav-links' to="/Menu">
                Menu
            </NavLink>
            <NavLink className='nav-links' to="/Order">
                Order
            </NavLink>
            <NavLink className='nav-links' to="/Profile">
                Profile
            </NavLink>
            <NavLink className='nav-links' to="/Login">
                login
            </NavLink>
            <NavLink className='nav-links' to="/SignUp">
                SignUp
            </NavLink>
            <button onClick={handleLogOut }>Log Out</button>
            </div>
        </div>
    )
}

export default NavBar