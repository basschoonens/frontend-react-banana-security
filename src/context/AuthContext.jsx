import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const [loggedIn, toggleLoggedIn] = useState(false);
    const navigate = useNavigate();

    function logout() {
        toggleLoggedIn(false);
        console.log('Logged out')
        navigate('/')
    }

    function login() {
        toggleLoggedIn(true);
        console.log('Logged in')
        // navigate to profile page
        navigate('/profile')
    }

    const data = {
        loggedIn: loggedIn,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;