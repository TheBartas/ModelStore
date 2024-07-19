export default function SignUpValidation(values) {
    let error = {};
    if (values.username === '') {
        error.username = 'Nazwa użytkownika nie może być pusta!';
    }

    if (values.email === '') {
        error.email = 'Email nie może być pusty!';
    }

    if (values.password === ''){
        error.password = 'Hasło nie może być puste!';
    } 

    if (values.confPassword === ''){
        error.confPassword= 'Hasło nie może być puste!';
    } 

    return error;
}
