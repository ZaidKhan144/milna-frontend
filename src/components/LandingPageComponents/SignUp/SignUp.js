import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, GoogleBtn, Header, Divider } from '../LogIn/LogInStyles'
import { SignupForm, Name } from './SignUpStyles'
import googleIcon from '../LogIn/google-icon.svg'
import TextField from '../Input/Input'
import { InputAdornment, IconButton, Input } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import './password.css'

const SignUp = () => {

    const [ showPassword, setShowPassword ] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {
        
    }

    const handleChange = () => {

    }

    return (
        <div>
            <Header>
                <h1><Link to="/">Milna</Link></h1>
            </Header> 
            <Container>
                <SignupForm onSubmit={handleSubmit}>
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
                        <TextField name="firstName" label="firstName" handleChange={handleChange} placeholder="First name" />
                        <TextField name="lastName" label="lastName" handleChange={handleChange} placeholder="Last name" />
                    </Name>
                    <TextField name="email" type="email" label="Email Address" handleChange={handleChange} placeholder="Email address" />
                    <Input 
                        required 
                        name="password" 
                        type={showPassword ? 'text' : 'password'} 
                        label="Password" 
                        handleChange={handleChange} 
                        placeholder="Password" 
                        handleShowPassword={handleShowPassword} 
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {!showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    <button type="submit">Sign up</button>
                </SignupForm>
                <div className="darkness">hello darkness my old friend</div>
            </Container>
        </div>
    )
}

export default SignUp