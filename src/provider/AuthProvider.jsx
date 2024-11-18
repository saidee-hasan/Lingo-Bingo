import React, { createContext } from 'react'
export const AuthContext = createContext(null)
function AuthProvider({children}) {
    const authInfo ={
        name:"saidee"
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
