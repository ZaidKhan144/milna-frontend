import React from 'react'
import { Link } from 'react-router-dom'
import { Container, GoogleBtn, Header, Divider } from '../LogIn/LogInStyles'
import { SignupForm, Name } from './SignUpStyles'
import googleIcon from '../LogIn/google-icon.svg'

const SignUp = () => {
    return (
        <div>
            <Header>
                <h1><Link to="/">Milna</Link></h1>
            </Header> 
            <Container>
                <SignupForm>
                    <h1>Create Account</h1>
                    <p>Already have an account? <Link to="/login">&nbsp;Log in</Link></p>
                    <GoogleBtn>
                        <span><img src={googleIcon} alt="Google Icon"/></span>
                        <span>Sign up with Google</span> 
                    </GoogleBtn>
                    <Divider>
                        <h2>Or</h2>
                    </Divider>
                    <Name>
                        <input type="text" name="firstName" id="firstName" placeholder="First name" />
                        <input type="text" name="lastName" id="lastName" placeholder="Last name" />
                    </Name>
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Password" />
                    <button type="submit">Sign up</button>
                </SignupForm>
                <div>hello darkness my old friend</div>
            </Container>
        </div>
    )
}

export default SignUp