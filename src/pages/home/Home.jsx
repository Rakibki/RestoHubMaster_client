import React, { useContext } from 'react'
import { authContext } from '../../providers/AuthProvaider'
import Banner from './Banner'
import Chefs from './Chefs_Section'
import Testimonials_Section from './Testimonials_Section'

const Home = () => {
  const {user} = useContext(authContext)
  
  return (
    <div>
      <Banner />
      <Chefs />
      <Testimonials_Section />
    </div>
  )
}

export default Home