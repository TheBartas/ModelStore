import './auth.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUpValidation from './validation.signup';
import axios from 'axios';


const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?!.* ).{8,}$/;

function SignUp() {
    const navigate = useNavigate();

    const goLogIn = () => {
        navigate('/login');
    }
    const [errors, setErrors] = useState({});

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confPassword, setConfPassword] = useState('');
    const [validConfPassword, setValidConfPassword] = useState(false);
    const [confPasswordFocus, setConfPasswordFocus] = useState(false);

    useEffect(()=>{
        setValidPassword(PASSWORD_PATTERN.test(password));
        setValidConfPassword(password === confPassword);
    }, [password, confPassword]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const guard = PASSWORD_PATTERN.test(password);
        if (!guard) {
            return;
        }


        const user = {
            username : username,
            email : email,
            password : password
        }

        try {
            
            const createdUser = await axios.post("http://localhost:3000/user/signup", user);
            const cart = {
                customer_id : createdUser.data._id.toString(),
                products : []
            }
            await axios.post('http://localhost:3000/cart/add', cart);

            setUsername('');
            setConfPassword('');
            setPassword('');
            setEmail('');

            navigate('/login');
        } catch(error) {
            if (error.response?.status === 500) {
                alert('Taka nazwa użytkownika już istnieje!');
            }
            setErrors(SignUpValidation({username, email, password, confPassword}));
        }
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
                            {errors.username && <span className='Danger-Span'> {errors.username}</span>}
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
                            <input 
                                type='password' 
                                placeholder='Wprowadź hasło' 
                                onChange={(e) => setPassword(e.target.value)}
                                aria-invalid={validPassword ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            ></input>
                            <p id="pwdnote" className={ passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                                Hasło musi zawierać:<br />
                                -Co najmniej jeden znak specjalny (@$!%*#?&),<br />
                                -Minimum jedną dużą literę,<br/>
                                -Minimum 8 znaków.
                            </p>
                            {errors.password && !passwordFocus && <span className='Danger-Span'> {errors.password}</span>}

                        </div>
                        <div  className='Input-Area-SignUp'>
                            <label htmlFor='password'><b>Potwierdź hasło:</b> </label>
                            <br></br>
                            <input 
                                type='password' 
                                placeholder='Potwierdź hasło' 
                                onChange={(e) => setConfPassword(e.target.value)}
                                aria-invalid={confPassword ? "false" : "true"}
                                aria-describedby="confpwdnote"
                                onFocus={() => setConfPasswordFocus(true)}
                                onBlur={() => setConfPasswordFocus(false)}
                            ></input>
                            <p id="confpwdnote" className={ confPasswordFocus && !validConfPassword ? "instructions" : "offscreen"}>
                                Potwierdź hasło!
                            </p>
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