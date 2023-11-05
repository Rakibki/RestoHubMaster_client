import React, { useContext } from 'react'
import { authContext } from '../providers/AuthProvaider'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user} = useContext(authContext)
  
  const location = useLocation()

  if(user?.email) {
    return children
  }

  return <Navigate state={location.pathname} to={"/login"} />
}

export default PrivateRoute