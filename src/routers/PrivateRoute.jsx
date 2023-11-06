import React, { useContext } from 'react'
import { authContext } from '../providers/AuthProvaider'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom'
import Loadiing from '../shared/Loadiing'

const PrivateRoute = ({children}) => {
  const {user, loadding} = useContext(authContext)
  

  const location = useLocation()

  if(loadding) {
    return <Loadiing />
  }

  if(user?.email) {
    return children
  }

  return <Navigate state={location.pathname} to={"/login"} />
}

export default PrivateRoute