import React from 'react';
import {getAuth} from 'firebase/firebase-auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const authInfo={
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;