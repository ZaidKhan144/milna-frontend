import React from 'react'
import { NavBar } from '../AppMain/AppMainStyles'
import { Link } from 'react-router-dom'

 const AppMainNav = () => {

    const user = null;

    return (
        <div>
            <NavBar>
                <h1><Link to="/">Landing Page</Link></h1>
                <h1><Link to="/groupMain">Milna</Link></h1>
                <Link to="/createGroup">Start a new group</Link>
                {
                    // If user is logged in 
                    user ? (
                        <div>
                            <div>
                                <img src={user?.result.imageUrl} alt={user?.result.name} />
                                <p>{user?.result.name.charAt(0)}</p> 
                                <button>Logout</button>
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