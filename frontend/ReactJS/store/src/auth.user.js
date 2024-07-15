import * as React from 'react';
import { Navigate } from 'react-router-dom';

const authContext = React.createContext();

export function useAuth() {
    const [authed, setAuthed] = React.useState(false);
    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res();
            })
        }
    };
}



export function RequireAuth({ children }) {
    const auth = useAuth();
    console.log(auth);
    return auth === true ? children : <Navigate to='/'/>;
}



export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
  
export default function AuthConsumer() {
    return React.useContext(authContext);
}


