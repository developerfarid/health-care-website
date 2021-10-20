import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const allFirebaseData = useFirebase()
    
    return (
        <AuthContext.Provider value={allFirebaseData}>
        {children}
        </AuthContext.Provider> 
    );
};

export default AuthProviders;