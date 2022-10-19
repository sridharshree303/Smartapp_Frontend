import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [employee, setEmployee] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const checkactive = (loggedIn) =>{
        setLoggedIn(loggedIn);
    }

    const login = (employee) => {
        setEmployee(employee);
    }

    const logout = (employee) => {
        setEmployee(employee);
    }

    const resetAuth = () => {
        setEmployee(null);
    }

    return (
        <AuthContext.Provider value={{ employee, login, logout, resetAuth, loggedIn,checkactive }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}