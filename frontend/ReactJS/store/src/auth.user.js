import * as React from 'react';
import { Navigate } from 'react-router-dom';

const authContext = React.createContext();


export function useAuth() {
    return React.useContext(authContext);
}

export function AuthProvider({ children }) {
    const [authed, setAuthed] = React.useState(false);

    const login = () => {
        return new Promise((res) => {
            setAuthed(true);
            res();
        })
    }

    const logout = () => {
        return new Promise((res) => {
            setAuthed(false);
            res();
        })
    }

    return (<authContext.Provider value={{authed, login, logout}}>
        {children}
    </authContext.Provider>)
}



export function RequireAuth({ children }) {
    const auth = useAuth();
    return auth.authed === true ? children : <Navigate to='/' replace/>;
}
