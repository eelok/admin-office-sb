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
            await auth.signInWithEmailAndPassword(email, password);
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
            <div className='login'>
                <form className='login__wrapper' onSubmit={this.handleAuthentication}>
                    <div className='login__header'>
                        <h2 className='login__title'>LOGIN</h2>
                    </div>
                    <section className='login__input-box'>
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
                        <div className="login__btn-wrapper">
                            <button className='btn-big'>Login</button>
                        </div>
                    </section>
                </form>
            </div>
        )
    }
}

export default Login;

