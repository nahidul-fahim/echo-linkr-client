'use client';
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    // hooks
    const [userData, setUserData] = useState({});

    // get userData after every every render



    const authInfo = { userData, setUserData };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export function useGlobalAuthContext() {
    return useContext(AuthContext)
}