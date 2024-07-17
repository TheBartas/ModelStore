import * as React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const authContext = React.createContext();


export function useAuth() {
    return React.useContext(authContext);
}

export function AuthProvider({ children }) {
    const [authed, setAuthed] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setAuthed(true);
        } else {
            setAuthed(false);
        }
        setLoading(false);
    }, []);


    const login = (token) => {
        return new Promise((res) => {
            localStorage.setItem('access_token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setAuthed(true);
            res();
        })
    }

    const logout = () => {
        return new Promise((res) => {
            localStorage.removeItem('access_token');
            delete axios.defaults.headers.common['Authorization'];
            setAuthed(false);
            res();
        })
    }

    return (<authContext.Provider value={{authed, login, logout, loading}}>
        {children}
    </authContext.Provider>)
}



export function RequireAuth({ children }) {
    const auth = useAuth();
    if (auth.loading) {
        return <div>Loading...</div>
    }
    return auth.authed === true ? children : <Navigate to='/login' replace/>;
}
