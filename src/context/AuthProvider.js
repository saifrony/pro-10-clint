import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebas.config';
import{createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { useEffect } from 'react';





const auth=getAuth(app);



export const AuthContext =createContext();        
  

const AuthProvider = ({children}) => {
   const [user,setUser]= useState({displayName:"Ron"});

//    const googleProvider = new GoogleAuthProvider();

   const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }

   const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email,password);
   }

   const signInWithGoogle = () =>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};

   const logOut=() =>{
    return signOut(auth);
   }
   

   useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            console.log('auth changed',currentuser)
        })
        return()=>{
            unsubscribe();
        }
   },[])
  
    const authInfo = {user,createUser,signIn,logOut,signInWithGoogle}

    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;