import React, {useState} from "react";
import InputComponent from "../../components/Input/Input-component";
import './login-style.scss'
import {auth} from "../../firebase.js";
import spinner from "../../assets/spinner.gif";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleAuthentication = async event => {
        event.preventDefault();
        setLoading(true);
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
    }

    return (
        <div className='login'>
            <form className='login__wrapper' onSubmit={handleAuthentication}>
                <div className='login__header'>
                    <h2 className='login__title'>LOGIN</h2>
                </div>
                <section className='login__input-box'>
                    {
                        isError ?
                            (<div className='login__notification'>
                                <p>Введен неверно логин или параль</p>
                            </div>)
                            :
                            null
                    }
                    <div className={`login__loader ${loading ? "login__loader--show" : ""}`}>
                        <img src={spinner} alt='loading_icon'/>
                    </div>
                    <InputComponent
                        type='email'
                        label='Email'
                        id='email'
                        name='email'
                        required={true}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputComponent
                        type='password'
                        label='Password'
                        id="password"
                        name='password'
                        required={true}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login__btn-wrapper">
                        <button className='btn-big'>Login</button>
                    </div>
                </section>
            </form>
        </div>
    )

}

export default Login;

