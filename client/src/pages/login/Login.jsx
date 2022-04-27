import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className="loginLeft">
                <h3 className='loginLogo'>Loichub</h3>
                <span className='loginDesc'>Le réseau 100% africain</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" className='loginInput' placeholder='Email' />
                    <input type="password" className='loginInput' placeholder='Mot de passe' />
                    <button className='loginButton'>Connexion</button>
                    <span className='loginForgot'>Mot de passe oublié ?</span>
                    <button className='loginRegisterButton'>Créer un nouveau compte</button>
                </div>
            </div>
        </div>
    </div>
  )
}
