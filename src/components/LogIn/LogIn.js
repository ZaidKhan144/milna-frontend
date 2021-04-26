import React from 'react'
import { Link } from 'react-router-dom'


const LogIn = () => {
    return (
        <div>
            <div>
                <h1>Milna</h1>
            </div>
            <div>
                <div>
                    <h1>Log in to Milna</h1>
                    <p>Don't have an account yet? <Link to="/signup">Sign up for free</Link></p>
                    <button>Log in with Google</button>
                    <div>
                        <div></div>
                        <h1>Or</h1>
                        <div></div>
                    </div>
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Password" />
                    <button>Log in</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}


export default LogIn