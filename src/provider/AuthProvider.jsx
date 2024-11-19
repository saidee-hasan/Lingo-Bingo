import {
  createUserWithEmailAndPassword,
 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth/cordova";


import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { auth } from "../../firebase.init";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  
  };
  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Currently logged in User:", currentUser);
        setUser(currentUser)
     
      } else {
        console.log("No user is signed in.");
      }
    });

    // Cleanup function to unsubscribe from the listener

    return () => {
      unsubscribe();
    };
  }, [auth]);
const signOutUser = ()=>{
  return signOut(auth)
}

  const authInfo = {
    createUser,
    loginUser,
    user,
    signOutUser,
   
  
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
