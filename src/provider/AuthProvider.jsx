import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova'
import React, { createContext } from 'react'
export const AuthContext = createContext(null);
import { auth } from '../../firebase.init';
function AuthProvider({children}) {


  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = async(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
  }


    const authInfo ={
       createUser,
       loginUser
    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
      {
        children
      }
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
