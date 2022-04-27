import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className="loginLeft">
                <h3 className='loginLogo'>Loichub</h3>
                <span className='loginDesc'>Le réseau 100% africain</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className='loginInput' placeholder='Nom' />
                    <input type="email" className='loginInput' placeholder='Email' />
                    <input type="password" className='loginInput' placeholder='Mot de passe' />
                    <input type="password" className='loginInput' placeholder='Confirmez le mot de passe' />
                    <button className='loginButton'>S'enregistrer</button>
                    <button className='loginRegisterButton'>Se connecter</button>
                </div>
            </div>
        </div>
    </div>
  )
}
