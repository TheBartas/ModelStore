import { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
    const navigate = useNavigate();

    const goSignIn = () => {
        navigate('/');
    }

    const [errors, setErrors] = useState({});

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleOnSubmit = async (e) => {
        e.preventDefault();


        const userCheck = {
            username : userName,
            password : password
        }

        await axios.post('http://localhost:3000/user/login', userCheck)
            .then(()=> navigate('/products'))
            .catch((error) => {
                if (error.response?.data?.statusCode === 404) {
                    //alert('Nieprawidłowy email lub hasło!');
                    setErrors({ all : "Nieprawidłowa nazwa użytkownika lub hasło!"})
                } else if(error.response?.data?.statusCode === 401) {
                    //alert(error);
                    setErrors({ password : "Nieprawidłowe hasło!"});
                }
            })
    }



    return (
        <div>
            <div className="Auth-Input">
                <div className='Auth-Input-Form'>
                    <div className='Main-Text-SignUp'>
                        <h2>Logowanie</h2>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='email'><b>Nazwa użytkownika:</b> </label>
                            <br></br>
                            <input placeholder='Wprowadź nazwę użytkownika' onChange={(e) => setUsername(e.target.value)}></input>
                            {errors.username && <span className='Danger-Span'> {errors.email}</span>}
                            {errors.all && <span className='Danger-Span'> {errors.all}</span>}
                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='password'><b>Hasło:</b> </label>
                            <br></br>
                            <input type='password' placeholder='Wprowadź hasło' onChange={(e) => setPassword(e.target.value)}></input>
                            {errors.password && <span className='Danger-Span'> {errors.password}</span>}
                            {errors.all && <span className='Danger-Span'> {errors.all}</span>}
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