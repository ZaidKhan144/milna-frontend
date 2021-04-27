import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, LoginForm, Divider, GoogleBtn } from './LogInStyles'
import googleIcon from './google-icon.svg'

const LogIn = () => {
    return (
        <div>
            <Header>
                <h1>Milna</h1>
            </Header> 
            <Container>
                <LoginForm>
                    <h1>Log in to Milna</h1>
                    <p>Don't have an account yet? <Link to="/signup">&nbsp;Sign up for free</Link></p>
                    <GoogleBtn> 
                        <span><img src={googleIcon} alt=""/></span> 
                        <span>Log in with Google</span> 
                    </GoogleBtn>
                    <Divider>
                        <h2>Or</h2>
                    </Divider>
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Password" />
                    <button type="submit">Log in</button>
                </LoginForm>
                <div>Hello</div>
            </Container>
        </div>
    )
}


export default LogIn