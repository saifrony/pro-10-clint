import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebas.config'


const auth = getAuth(app);


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser]= useState({})
    
    // create user
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // 2. updatename
    const updateName = (name)=>{
        return updateProfile(auth,createUser,{displayName:name})
    }
// email
const varifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
}
// 4.google
const signInWithGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
}
  

    const authInfo = {user,createUser,updateName,varifyEmail,signInWithGoogle}

    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;