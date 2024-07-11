import './auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUpValidation from './validation.signup';
import axios from 'axios';


function SignUp() {
    const navigate = useNavigate();

    const goLogIn = () => {
        navigate('/login');
    }


    const [errors, setErrors] = useState({});

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setErrors(SignUpValidation({username, email, password, confPassword}));

        const user = {
            username : username,
            email : email,
            password : password
        }

        await axios.post("http://localhost:3000/user/signup", user);
        e.target.reset();

        navigate('/login');
    }
    return (
        <div>
            <div className="Auth-Input">
                <div className='Auth-Input-Form'>
                    <div className='Main-Text-SignUp'>
                        <h2>Tworzenie konta</h2>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <div className='Input-Area-SignUp'>
                            <label><b>Nazwa użytkownika:</b> </label>
                            <br></br>
                            <input placeholder='Wprowadź nazwę użytkownika' onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='email'><b>Email:</b> </label>
                            <br></br>
                            <input type='email' placeholder='Wprowadź email' onChange={(e) => setEmail(e.target.value)}></input>
                            {errors.email && <span className='Danger-Span'> {errors.email}</span>}
                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='password'><b>Hasło:</b> </label>
                            <br></br>
                            <input type='password' placeholder='Wprowadź hasło' onChange={(e) => setPassword(e.target.value)}></input>
                            {errors.password && <span className='Danger-Span'> {errors.password}</span>}
                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='password'><b>Potwierdź hasło:</b> </label>
                            <br></br>
                            <input type='password' placeholder='Potwierdź hasło' onChange={(e) => setConfPassword(e.target.value)}></input>
                            {errors.confPassword && <span className='Danger-Span'> {errors.confPassword}</span>}
                        </div>
                        <button className='Auth-Button' id='succes'>Stwórz konto</button>
                        <button className='Auth-Button' onClick={goLogIn}>Zaloguj</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SignUp;