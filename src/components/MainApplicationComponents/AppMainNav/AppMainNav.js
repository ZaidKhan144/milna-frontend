import React from 'react'
import { NavBar } from '../AppMain/AppMainStyles'
import { Link } from 'react-router-dom'

 const AppMainNav = () => {
    return (
        <div>
            <NavBar>
                <h1><Link to="/">Milna</Link></h1>
                <Link to="/createGroup">Start a new group</Link>
            </NavBar>
        </div>
    )
}

export default AppMainNav