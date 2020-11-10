import React from "react";
import InputComponent from "../../components/Input/Input-component";
import './login-style.scss'
import {auth} from "../../firebase.js";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            authorisationIsFail: false,
        }
    }


    handleAuthentication = async event => {
        event.preventDefault()
        let {email, password, authorisationIsFail} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: '', authorisationIsFail: false})
        } catch (error) {
            this.setState({
                ...this.state,
                authorisationIsFail: true
            })
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {email, password, authorisationIsFail} = this.state;
        return (
            <div className='login'>
                <form className='login__wrapper' onSubmit={this.handleAuthentication}>
                    <div className='login__header'>
                        <h2 className='login__title'>LOGIN</h2>
                    </div>
                    <section className='login__input-box'>
                        {
                            authorisationIsFail ?
                                (<div className='login__notification'>
                                    <p>Введен неверно логин или параль</p>
                                </div>)
                                :
                                null
                        }
                        <InputComponent
                            type='email'
                            label='Email'
                            id='email'
                            name='email'
                            required={true}
                            value={email}
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            type='password'
                            label='Password'
                            id="password"
                            name='password'
                            required={true}
                            value={password}
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

