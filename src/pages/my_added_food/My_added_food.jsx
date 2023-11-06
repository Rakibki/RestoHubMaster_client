import React, { useContext } from 'react'

import {authContext} from "../../providers/AuthProvaider"

const My_added_food = () => {

  const {user} = useContext(authContext)

  console.log(user);

  return (
    <div>My_added_food</div>
  )
}

export default My_added_food