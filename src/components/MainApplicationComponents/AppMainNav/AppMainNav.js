import React, { useState, useEffect } from 'react'
import { NavBar } from '../AppMain/AppMainStyles'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './AppMainNav.css'

 const AppMainNav = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const history = useHistory()

    const logout = () => {
        dispatch({ type: 'LOGOUT'})

        history.push('/')

        setUser(null)
    }

    console.log(user)

    // useEffect(() => {
    //     const token = user?.token 

    //     setUser(JSON.parse(localStorage.getItem('profile')))
    // })

    return (
        <div>
            <NavBar>
                <h1><Link to="/">Landing Page</Link></h1>
                <h1><Link to="/groupMain">Milna</Link></h1>
                <Link to="/createGroup">Start a new group</Link>
                {
                    // If user is logged in 
                    user ? (
                        <div className="profile-header">
                            <div className="profile">
                                <div className="profile-img">
                                { user?.result.imageUrl ? 
                                    <img src={user?.result.imageUrl} alt={user?.result.name} /> :
                                    <p>{user?.result.name.charAt(0)}</p>
                                }
                                </div>
                                <p>{user?.result.name}</p> 
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    ) : (
                        // If not
                        <div>
                            <li>
                                <Link to="/login">Log In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </div>
                    )
                }
            </NavBar>
        </div>
    )
}

export default AppMainNav