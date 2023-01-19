import {NavLink, useNavigate} from 'react-router-dom'

function NavBar({setCurrentUser}) {

    const navigate = useNavigate()
    
    const handleLogOut = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(r=>{
            if(r.ok){
                setCurrentUser(null)
                navigate('/')
            }
        })
    }
    return(
        <div className="navbar">
            
            <h1 className='nav-title'>Pesto on the Go</h1>
            <div className='all-nav-links'>
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            <NavLink className='nav-links' to="/item">
                View Items
            </NavLink>
            <NavLink className='nav-links' to="/Order">
                Orders
            </NavLink>
            <NavLink className='nav-links' to="/ItemOrder">
                profile
            </NavLink>
          
            <button className='logout-button'  onClick={handleLogOut }>Log Out</button>
            </div>
        </div>
    )
}

export default NavBar