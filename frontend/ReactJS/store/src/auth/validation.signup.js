function SignUpValidation(values) {
    //alert('');
    let error = {};


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?!.* ).{8,}$/;



    if (values.username === '') {
        error.username = 'Nazwa użytkownika nie może być pusta!';
    }

    if (values.email === '') {
        error.email = 'Email nie może być pusty';
    } else if (!emailPattern.test(values.email)) {
        error.email = 'Niepoprawny email!';
    }


    if (values.password === ''){
        error.password = 'Hasło nie może być puste!';
    } else if (!passwordPattern.test(values.password)){
        error.password = 'Niepoprawny format hasła!';
        alert('Hasło musi zawierać: ');
    }

    if (values.confPassword === ''){
        error.confPassword= 'Hasło nie może być puste!';
    } else if (values.confPassword !== '' && values.confPassword !== values.password) {
        error.confPassword= 'Niezgodne potwierdzenie hasła!';
    }


    return error;
}


export default SignUpValidation;