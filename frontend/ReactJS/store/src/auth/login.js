import './auth.css';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();

    const goSignIn = () => {
        navigate('/');
    }

    return (
        <div>
            <div className="Auth-Input">
                <div className='Auth-Input-Form'>
                    <div className='Main-Text-SignUp'>
                        <h2>Logowanie</h2>
                    </div>
                    <form>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='email'><b>Email:</b> </label>
                            <br></br>
                            <input type='email' placeholder='Wprowadź email'></input>
                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='password'><b>Hasło:</b> </label>
                            <br></br>
                            <input type='password' placeholder='Wprowadź hasło'></input>
                        </div>
                        <button className='Auth-Button' id='succes'>Zaloguj</button>
                        <button className='Auth-Button' onClick={goSignIn}>Stwórz konto</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default LogIn;