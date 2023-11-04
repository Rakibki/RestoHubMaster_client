import React, { createContext, useState } from 'react'

export const authContext = createContext(null)

const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loadding, setLoadding] = useState(true)

    const userInfo = {
        user,
        loadding
    }
  return (
   <authContext.Provider value={userInfo}>
        {children}
   </authContext.Provider>
  )
}

export default AuthProvaider