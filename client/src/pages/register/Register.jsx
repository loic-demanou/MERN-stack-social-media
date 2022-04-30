import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './register.css'

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault();
        if (passwordConfirm.current.value !== password.current.value) {
            passwordConfirm.current.setCustomValidity("Les mots de passes ne sont pas identiques !");
        } else {
            const user = {
                username: username.current.value, 
                email: email.current.value,
                password: password.current.value,
            };

            setIsPending(true)
            try {
                const res = await axios.post('/auth/register', user)
                navigate('/login')
                setIsPending(false)
            } catch (err) {
                console.log(err);
                setIsPending(false)
            }
        }
        
    }


    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>Loichub</h3>
                    <span className='loginDesc'>Le réseau 100% africain</span>
                </div>
                <div className="loginRight">
                    <form onSubmit={register} className="loginBox">
                        <input type="text" className='loginInput' placeholder='Nom' required ref={username} />
                        <input type="email" className='loginInput' placeholder='Email' required ref={email} />
                        <input type="password" className='loginInput' placeholder='Mot de passe' minLength={6} required ref={password} />
                        <input type="password" className='loginInput' placeholder='Confirmez le mot de passe' required ref={passwordConfirm} />
                        <button type='submit' className='loginButton'>{ isPending ? <CircularProgress style={{ color:"white" }} /> : "S'enregistrer"}</button>
                        <button className='loginRegisterButton'>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
