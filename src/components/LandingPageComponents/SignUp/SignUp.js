import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, GoogleBtn, Header, Divider } from '../LogIn/LogInStyles'
import { SignupForm, Name } from './SignUpStyles'
import googleIcon from '../LogIn/google-icon.svg'
import TextField from '../Input/Input'
import { InputAdornment, IconButton, Input } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { GoogleLogin } from 'react-google-login'
import './password.css'
import { useDispatch } from 'react-redux'

export const googleFailure = (error) => {
    console.log(error)
    console.log('Google Sign Up was unsuccessful.')
}

const SignUp = () => {

    const dispatch = useDispatch();
    const history = useHistory()

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
                    <GoogleLogin 
                        clientId="151505805564-qfld5oejinn5e6o86j3jvm8v19stksnu.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <GoogleBtn onClick={renderProps.onClick}>
                                <span><img src={googleIcon} alt="Google Icon"/></span>
                                <span>Sign up with Google</span> 
                            </GoogleBtn>
                        )}
                        onSuccess={ async (res)=>{
                            /* By using optional chaining operator we will know whether the object (res) is undefined/null or not 
                                before attempting to access profileObj. */
                            const result = res?.profileObj
                            const token = res?.tokenId
    
                            try {
                                dispatch({ type: 'AUTH', data: { result, token }})

                                history.push('/groupMain')

                            } catch (error) {
                                console.log(error)
                            }
                        }}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    
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