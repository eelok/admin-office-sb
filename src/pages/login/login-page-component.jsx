import React from "react";
import InputComponent from "../../components/Input/Input-component";
import './login-style.scss'

const Login = () => {
    return(
        <div className='login-wrapper'>
        <InputComponent
            type='email'
            label='Email'
            id='email'
            name='email'
        />
        <InputComponent
            type='password'
            label='Password'
            id="password"
            name='password'
        />
        </div>
    )
}

export default Login;

