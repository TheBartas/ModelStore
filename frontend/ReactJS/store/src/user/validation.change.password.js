export default function ChangePasswordValidation(values) {
    let error = {}
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?!.* ).{8,}$/;


    console.log(values.newPassword);
    if (!passwordPattern.test(values.newPassword)) {
        alert('Nowe hasło musi zawierać:\n -Co najmniej jeden znak specjalny (@$!%*#?&),\n -Minimum jedną dużą literę,\n -Minimum 8 znaków.');
        error.newPassword = 'Nieprawidłowy format!';
    }

    if (values.newPassword !== values.checkNewPassword) {
        error.checkNewPassword = 'Nieprawidłowe hasło!';
    }

    if (values.code === 401) {
        error.password = 'Nieprawidłowe hasło!';
    }

    return error;
}