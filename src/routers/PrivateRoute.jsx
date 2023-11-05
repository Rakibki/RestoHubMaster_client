import React, { useContext } from 'react'
import { authContext } from '../providers/AuthProvaider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user} = useContext(authContext)

  if(user?.email) {
    return children
  }

  return <Navigate to={"/login"} />
}

export default PrivateRoute