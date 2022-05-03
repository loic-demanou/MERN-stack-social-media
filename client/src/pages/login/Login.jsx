import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    console.log(user);
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>Loichub</h3>
                    <span className='loginDesc'>Le réseau 100% africain</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={login}>
                        <input type="email" className='loginInput' placeholder='Email' required ref={email} />
                        <input type="password" className='loginInput' placeholder='Mot de passe' required ref={password} minLength="6" />
                        <button className='loginButton' type='submit' disabled={isFetching}>
                            {isFetching ? <CircularProgress style={{ color: "white" }} /> : "Connexion"}
                        </button>
                        {error && <span style={{ textAlign: 'center', color: "red", fontWeight: '700' }}>{error.response.data}</span>}
                        <span className='loginForgot'>Mot de passe oublié ?</span>
                        <button className='loginRegisterButton'>
                            {isFetching ? <CircularProgress style={{ color: "white" }} /> : "Créer un nouveau compte"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
