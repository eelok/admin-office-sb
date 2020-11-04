import React from "react";
import InputComponent from "../../components/Input/Input-component";
import './login-style.scss'
import {auth} from "../../firebase.js";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleAuthentication = async event => {
        event.preventDefault()
        const {email, password} = this.state;
        try {
            let userCredentials = await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <form className='login-wrapper' onSubmit={this.handleAuthentication}>
                <InputComponent
                    type='email'
                    label='Email'
                    id='email'
                    name='email'
                    required={true}
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <InputComponent
                    type='password'
                    label='Password'
                    id="password"
                    name='password'
                    required={true}
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button className='btn'>Login</button>
            </form>
        )
    }
}

export default Login;

