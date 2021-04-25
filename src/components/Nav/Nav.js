import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Nav = () => {
    return (
        
        <div className="flex flex-row justify-between mx-20 fixed z-10 inset-0 pt-5 nav">
            <div>
                <Link to="/">Milna</Link>
            </div>
            <ul className="flex nav-links">
                <li >
                    <Link to="/">Demo</Link>
                </li>
                <li className="pl-8">
                    <Link to="/">Log In</Link>
                </li>
                <li className="pl-8">
                    <Link to="/">Sign Up</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Nav