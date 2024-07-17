import { useState } from 'react';
import './change.password.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordValidation from './validation.change.password';
import axios from 'axios';
import { useAuth } from '../auth.user';

export function ChangePassword() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const [errors, setErrors] = useState({});
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [checkNewPassword, setCheckNewPassword] = useState('');





    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const changePasswordData = {
            oldPassword : oldPassword,
            newPassword : newPassword 
        }

        try {
            await axios.put('http://localhost:3000/user/update-password', changePasswordData);
            logout();
            navigate('/login');
        } catch(error) {
            const code = error.response?.data?.statusCode;
            setErrors(ChangePasswordValidation({oldPassword, newPassword, checkNewPassword, code}));
        }
    }


    const onClickButtonClear = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const backButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>
                <button className='Back-Button' onClick={backButton}>Wróć do menu</button>
            </div>
            <div className='Change-Input'>
                <div className='Change-Input-Form'>
                    <div className='Main-Text-Change-Password'>
                        <h1>Zmień hasło</h1>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <div className='Input-Area-Change-Password'>
                            <label htmlFor='password'><b>Obecne hasło:</b></label>
                            <br></br>
                            <input type='password' required onChange={(e) => setOldPassword(e.target.value)}></input>
                            {errors.password && <div className='Danger-Div'><span className='Danger-Span'> { errors.password } </span></div>}
                        </div>
                        <div className='Input-Area-Change-Password'>
                            <label htmlFor='password'><b>Nowe hasło:</b></label>
                            <br></br>
                            <input type='password' required onChange={(e) => setNewPassword(e.target.value)}></input>
                            {errors.newPassword && <div className='Danger-Div'><span className='Danger-Span'> { errors.newPassword } </span></div>}
                        </div>
                        <div className='Input-Area-Change-Password'>
                            <label htmlFor='password'><b>Potwierdź nowe hasło:</b></label>
                            <br></br>
                            <input type='password' required onChange={(e) => setCheckNewPassword(e.target.value)}></input>
                            {errors.checkNewPassword && <div className='Danger-Div'><span className='Danger-Span'> { errors.checkNewPassword } </span></div>}

                        </div>
                        <button className='Change-Password-Button'>Zmień</button>
                        <button className='Clear-Area-Button' onClick={() => onClickButtonClear}>Wyczyść pola</button>
                    </form>
                </div>
            </div>
        </div>
    )
}